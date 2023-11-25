FROM node:alpine as BUILD_IMAGE
WORKDIR /app/
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
RUN npm run build

FROM node:alpine as PRODUCTION_IMAGE
WORKDIR /app/
COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 5173
COPY package.json .
COPY vite.config.js .
RUN npm install javascript
CMD ["npm","run","preview"]