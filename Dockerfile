FROM node:10 AS base
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


FROM base AS dependencies
COPY . .
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
CMD [ "npm", "run", "build" ]

FROM base AS release
COPY --from=dependencies /usr/src/app/static/ static/
COPY --from=dependencies /usr/src/app/node_modules/ node_modules/
EXPOSE 3002
CMD [ "npm", "run", "start" ]