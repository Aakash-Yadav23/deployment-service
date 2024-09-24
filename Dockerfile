# Stage 1: Build
FROM node:latest AS build

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build 

FROM node:latest AS production

WORKDIR /app-production

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./



RUN npm install --only=production

# Start the application
CMD ["npm", "start"]
