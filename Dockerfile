# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++ libc6-compat
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -q --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
