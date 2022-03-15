FROM node:17-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ./package*.json .
RUN npm install
RUN npm install -g serve

COPY . .
RUN chown -R node:node /app
RUN npm run build
RUN chmod a+rx ./start.sh
USER node

EXPOSE 3000

CMD ./start.sh
