pipeline {
    agent {
        label 'docker-agent'  // This should match the label of your Docker agent template
    }

    environment {
        // Define environment variables for Docker credentials and image name
        DOCKER_REGISTRY = 'dum1pr0'  // Replace with your Docker registry URL (e.g., Docker Hub)
        DOCKER_IMAGE_NAME = 'my-portfolio'  // Replace with your image name
        DOCKER_TAG = 'latest'  // You can dynamically use commit ID or version number for tags
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the latest code from the Git repository
                checkout scm  // This checks out the source code from the repository defined in the Jenkins job
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image from the Dockerfile
                    sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Login to Docker registry
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }

                    // Push the Docker image to the registry
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG'
                }
            }
        }
    }

    post {
        // Clean up Docker resources after the pipeline runs
        always {
            cleanWs()  // Clean up workspace after the build
            sh 'docker system prune -f'  // Clean up unused Docker resources
        }
    }
}
