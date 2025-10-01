FROM eclipse-temurin:17-jdk-jammy AS builder
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/portfolio-0.0.1.jar portfolio_app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","portfolio_app.jar"]