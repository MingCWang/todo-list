# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /react-vite-app
COPY . .
COPY package.json package-lock.json ./
RUN npm install 
CMD ["npm", "run", "dev"]
EXPOSE 3000