# mi-mvp-kafka 🎯

Este proyecto es una evolución del MVP original basado en React, con el objetivo de incluir una arquitectura orientada a eventos utilizando Apache Kafka. Se centra en demostrar la integración de Kafka como broker de eventos dentro de una aplicación moderna basada en microservicios.

---

## 🚀 Objetivo

Explorar e implementar los fundamentos de:
- Arquitectura de microservicios basada en eventos
- Comunicación asíncrona con Kafka
- Gestión de usuarios con JWT, roles y permisos
- Base de datos ligera con SQLite

---

## 🧱 Stack tecnológico

- **Node.js** + **Express**
- **Apache Kafka** (productor implementado)
- **SQLite** (persistencia simple)
- **JWT** (autenticación)
- **Zookeeper + Kafka (Docker)** (para entorno local)
- **Nodemon** (hot reload)
- **Axios, React Hook Form, JWT** (librerias) 

---

## 📁 Estructura del proyecto

\`\`\`
src/
├── config/                 # Configuración de base de datos, JWT, Kafka
├── controllers/           # Lógica de negocio (auth, roles)
├── events/                # Productores Kafka (más adelante: consumidores)
├── middlewares/           # Validaciones JWT y permisos
├── models/                # ORM con SQLite (User, Role, etc.)
├── routes/                # Rutas públicas y protegidas
├── seed/                  # Datos iniciales para pruebas (roles, usuarios)
├── app.js                 # Express App configurado
index.js                   # Punto de entrada del servidor
\`\`\`

---

## ⚙️ Instalación y ejecución

### Requisitos

- Docker + Docker Compose
- Git

### Clonar el repositorio

\`\`\`bash
git clone https://github.com/tu-usuario/mi-mvp-kafka.git
cd mi-mvp-kafka
\`\`\`

### Ejecutar servicios Kafka (si aún no están corriendo)

Asegúrate de tener corriendo el entorno Kafka con \`docker-compose.yml\`:

\`\`\`bash
docker compose up -d
\`\`\`

> El archivo \`docker-compose.yml\` debe contener Zookeeper, Kafka y la red \`kafka-net\`.

### Ejecutar en modo desarrollo con Kafka

Este comando utiliza Docker para levantar un entorno Node.js aislado y conecta con la red \`kafka-net\`.

\`\`\`bash
npm run kafka:dev
\`\`\`
---

## 🔑 Variables de entorno

Crea un archivo \`.env\` con el siguiente contenido como base:

\`\`\`env
JWT_SECRET=supersecret
JWT_EXPIRES=1h
\`\`\`

---

## 🧪 Endpoints principales

- \`POST /api/auth/register\` → Registro de usuarios
- \`POST /api/auth/login\` → Login con JWT

---

## 📤 Kafka en acción

El archivo \`src/events/kafkaProducer.js\` se encarga de publicar eventos en Kafka, como por ejemplo:

\`\`\`js
publishEvent('user.loggedIn', {
  userId,
  timestamp: new Date().toISOString()
});
\`\`\`

---

## 📌 Pendientes / Ideas

- [ ] Persistir logs de eventos en SQLite

---

## 📚 Aprendizaje

Este proyecto busca ser una herramienta de aprendizaje para entender arquitecturas modernas basadas en eventos, y sirve como punto de partida para proyectos más complejos.

---

## 📄 Licencia

MIT © Ignacia Mendez