FROM node:21.1.0-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del paquete.json y paquete-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm i -f

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]