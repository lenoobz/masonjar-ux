#==================== Building Stage ================================================ 

# Create the image based on the official Node latest image from Dockerhub
FROM node:latest as node

# Expose the port the app runs in
EXPOSE 8080

# Change directory so that our commands run inside this new directory
WORKDIR /masonjar-ux

# Copy dependency definitions
COPY package.json ./

# Install dependencies using npm
RUN npm install

#Build the app
CMD npm run start:dev

#==================== Setting up stage ==================== 
# Create image based on the official nginx - Alpine image
# FROM nginx:1.13.7-alpine

# COPY --from=node /to-do-app/dist/ /usr/share/nginx/html

# COPY ./nginx-to-do-app.conf /etc/nginx/conf.d/default.conf