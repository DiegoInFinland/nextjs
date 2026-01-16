FROM node:alpine3.22 AS base 

WORKDIR /app

COPY package*.json ./
RUN npm ci 
COPY . .

FROM base AS builder 

COPY . . 
RUN npm run build 

FROM base AS production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

CMD ["npm", "start" ]

FROM base AS dev 

ENV NODE_ENV=development
COPY . . 
CMD ["npm", "run", "dev" ] 



