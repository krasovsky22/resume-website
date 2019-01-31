# Do the npm install or yarn install in the full image
FROM mhart/alpine-node:10 as BUILDER

WORKDIR /app

COPY . .

RUN npm ci --prod

RUN npm run build:prod


# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base-8

WORKDIR /app
COPY --from=BUILDER /app/dist ./dist
COPY --from=BUILDER /app/server.js .


EXPOSE 5000
CMD ["node", "server.js"]