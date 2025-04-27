# Build stage
FROM node:20-alpine AS builder

WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine-slim

# Remove default nginx website and unnecessary files
RUN rm -rf /usr/share/nginx/html/* && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

# Copy build output to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Create a simple nginx config for SPA routing
RUN echo 'server {\
    listen 80;\
    location / {\
        root /usr/share/nginx/html;\
        index index.html index.htm;\
        try_files $uri $uri/ /index.html;\
    }\
}' > /etc/nginx/conf.d/default.conf

# Make sure nginx can write to necessary directories
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 777 /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]