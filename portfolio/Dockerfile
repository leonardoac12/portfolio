FROM openjdk:17-oracle AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/portfolio-0.0.1.jar portfolio_app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","portfolio_app.jar"]