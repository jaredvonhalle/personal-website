FROM node:10 AS base
WORKDIR /usr/src/app
COPY package*.json ./

FROM base AS dependencies
RUN npm install --production
RUN cp -R node_modules prod_node_modules
RUN npm install
COPY . .
RUN npm run build:prod

FROM node:10
COPY --from=dependencies /usr/src/app/static/ static/
COPY --from=dependencies /usr/src/app/prod_node_modules/ node_modules/
EXPOSE 3002
CMD [ "npm", "run", "start" ]