FROM node:18-alpine

WORKDIR /app

COPY node_modules ./

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]