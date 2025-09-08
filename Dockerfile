FROM node:22.18.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]
