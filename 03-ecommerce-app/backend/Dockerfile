# Step 1: Build Stage
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Runtime Stage
FROM openjdk:17-jdk-slim
WORKDIR /app
# Adjust 'backend-0.0.1-SNAPSHOT.jar' to match your actual build output name
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]