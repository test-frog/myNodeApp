FROM node:18-alpine

# Create and switch to a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup


WORKDIR /app

COPY node_modules ./

COPY . .

# Change ownership of the application files
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

EXPOSE 3000

CMD ["node", "index.js"]