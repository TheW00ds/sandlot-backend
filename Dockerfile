FROM node:18-alpine AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:18-alpine AS prod


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

RUN npx prisma generate

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
