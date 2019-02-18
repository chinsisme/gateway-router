FROM node:8.12.0-alpine
RUN apk --no-cache add curl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2000
CMD ["node", "index.js"]
