FROM node:8.12.0-alpine@sha256:d75742c5fd41261113ed4706f961a21238db84648c825a5126ada373c361f46e

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

ENV NODE_ENV production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start
