# Stage 1: Build the Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci 
COPY . .
RUN npm run build

# Stage 2: Serve the Angular app with Nginx
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist/angular-app/browser .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]