# Use Node.js 18 (LTS) as the base image
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install zsh (optional, for enhanced terminal experience)
RUN apt-get update && apt-get install -y zsh && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspaces/portfolio

# Copy project files
COPY . .

# Install dependencies
RUN npm install
