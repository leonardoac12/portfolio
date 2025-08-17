FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/portfolio-0.0.1.jar
COPY ${JAR_FILE} portfolio_app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","portfolio_app.jar"]