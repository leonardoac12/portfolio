# Fase de construcción
FROM openjdk:17-jdk-slim AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Fase de ejecución
FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=builder /app/target/portfolio-0.0.1.jar portfolio_app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","portfolio_app.jar"]