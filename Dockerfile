FROM node:12-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["node", "/src/index.js"] 