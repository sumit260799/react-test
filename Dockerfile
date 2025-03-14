# Step 1: Use Node.js as the build environment
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Check if build folder exists (for debugging)
RUN ls -la /app/build || echo "Build folder missing!"

# Step 2: Use Nginx to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built React files from previous stage
COPY --from=build /app/build ./

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
