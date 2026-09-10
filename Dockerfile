# --- Build stage ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Serve stage ---
FROM nginx:1.27-alpine
# Render injects PORT at runtime; nginx's entrypoint runs envsubst on templates.
# NGINX_ENVSUBST_FILTER limits substitution to $PORT so nginx vars ($uri, etc.) survive.
ENV PORT=8080
ENV NGINX_ENVSUBST_FILTER=PORT
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
