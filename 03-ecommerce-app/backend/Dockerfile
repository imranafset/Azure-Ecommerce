# Step 1: Build Stage
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Runtime Stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Adjust 'backend-0.0.1-SNAPSHOT.jar' to match your actual build output name
COPY --from=build /app/target*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]