FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY server.js .
COPY instrumentation.js .

EXPOSE 3000

CMD ["node", "-r", "./instrumentation.js", "server.js"]
