FROM node:22.9-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

USER node

CMD ["dumb-init", "node", "server.js"]