# Use the official Bun image as a base
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and bun.lockb (if available)
COPY package.json bun.lockb ./

# Install dependencies
RUN bun i

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "start"]