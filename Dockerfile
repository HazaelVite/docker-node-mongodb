FROM node:16
# Crear directorio de trabajo
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/appp

COPY package*.json ./

# Instalar los modulos de node
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]