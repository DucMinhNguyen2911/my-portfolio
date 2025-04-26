pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG .'
        }

      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
            sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
          }

          // Push the Docker image to the registry
          sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:$DOCKER_TAG'
        }

      }
    }

  }
  environment {
    DOCKER_REGISTRY = 'dum1pr0'
    DOCKER_IMAGE_NAME = 'my-portfolio'
    DOCKER_TAG = 'latest'
  }
  post {
    always {
      cleanWs()
    }

  }
}