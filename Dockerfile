# Använd en liten Node.js-bild som bas
FROM node:alpine

# Ställ in arbetsmappen i containern
WORKDIR /app

# Kopiera package.json och installera beroenden
COPY package.json package-lock.json ./
RUN npm install

# Kopiera resten av koden
COPY . .

# Bygg frontend (om du använder Next.js, React, eller liknande)
RUN npm run build

# Exponera porten (för React är det ofta 3000, för Next.js 3000 eller 4000)
EXPOSE 3000

# Starta applikationen
CMD ["npm", "run", "dev"]
