# Step 1: Use Node.js as the build environment
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Vite project
RUN npm run build

# Debugging: Check if dist folder is created
RUN ls -la /app/dist || echo "⚠️ dist folder is missing!"

# Step 2: Use Nginx to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built Vite files from previous stage
COPY --from=build /app/dist ./

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
