# 📦 MVP Educativo: Arquitectura basada en eventos con Kafka

Este README documenta el flujo completo de un MVP educativo que integra un frontend en React, un backend en Node.js con Express, y un microservicio consumidor de eventos Kafka que envía correos electrónicos usando Mailtrap.

---

## 🎯 Objetivo del MVP

- Aprender a construir una arquitectura desacoplada basada en eventos.
- Implementar un flujo completo de registro de usuario con notificación por correo electrónico.
- Utilizar Kafka como intermediario de eventos.
- Ejecutar Kafka mediante Docker sin necesidad de dockerizar los servicios de desarrollo.

---

## 🗺️ Flujo General

1. Usuario se registra desde el frontend.
2. El backend crea el usuario y publica un evento `user.created` en Kafka.
3. El email-consumer escucha este evento y envía un correo usando Mailtrap.

---

## 📁 Estructura de los proyectos

### Frontend (React)

```
/frontend
├── src/
│   ├── pages/
│   │   └── Register.jsx        # Formulario de registro
│   ├── services/
│   │   └── api.js              # Función axios para hacer POST al backend
│   └── App.js                  # Enrutamiento
```

### Backend (Node.js + Express + KafkaJS)

```
/backend
├── src/
│   ├── controllers/
│   │   └── authController.js     # Lógica del endpoint de registro
│   ├── events/
│   │   ├── kafkaProducer.js      # Publica eventos en Kafka
│   │   
│   ├── models/
│   │   └── User.js               # Modelo Sequelize
│   └── routes/
│       └── authRoutes.js         # Rutas de autenticación    
├── index.js / app.js         # Arranque del servidor
├── docker-compose.yml # Kafka + Zookeeper/
│   
```

### Email Consumer (microservicio)

```
/email-consumer-kafka
├── src/
│   ├── config/
│   │   ├── kafka.js             # Cliente Kafka
│   │   └── mailer.js            # Configuración SMTP (Mailtrap)
│   ├── consumer/
│   │   └── userConsumer.js      # Lógica para reaccionar a user.created
│   └── index.js                 # Arranque del servicio
├── .env                         # Variables de entorno
```

---

## 🔗 Comunicación entre archivos

```
Register.js → api.js → POST /auth/register
→ authRoutes.js → authController.js → User.create()
→ kafkaProducer.js → Kafka (topic: user-events)
→ email-consumer (userConsumer.js) → mailer.js → Mailtrap
```

---

## 🐳 Uso de Docker

- Kafka y Zookeeper corren dentro de contenedores usando `docker-compose`.
- Se utiliza una red externa `kafka-net` para que los servicios externos puedan conectarse.
- El backend y el email-service se ejecutan en local, pero dentro de contenedores temporales conectados a esa red:

```bash
npm run kafka:dev
```

```json
"scripts": {
  "kafka:dev": "docker run --rm -it --network kafka-net -v C:\\ruta\\absoluta\\:/app -w /app node:18 sh -c \"npm install && npx nodemon index.js\""
}
```

---

## 📬 Configuración de Mailtrap

1. Crear cuenta en [https://mailtrap.io](https://mailtrap.io)
2. Obtener credenciales SMTP desde el Inbox
3. Agregar a `.env` en `email-consumer-kafka`:

```env
EMAIL_FROM=no-reply@miapp.com
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
EMAIL_USER=usuario_de_mailtrap
EMAIL_PASS=clave_de_mailtrap
```

---

## 🧪 Cómo probar

1. Crea una red de Docker:
```bash
docker network create kafka-net
```

2. Ejecutar Kafka:
```bash
docker compose up -d
```

3. Ejecutar backend:
```bash
npm run kafka:dev
```

4. Ejecutar email-consumer:
```bash
npm run kafka:dev
```

5. Hacer POST a:
```
http://localhost:5000/api/register
```
Con body:
```json
{
  "name": "Ignacia",
  "email": "ignacia@test.com",
  "password": "123456"
}
```

5. Ver el correo en Mailtrap

---

## ✅ ¿Qué se logró?

- Arquitectura desacoplada con eventos.
- Uso de Kafka como intermediario.
- Microservicio que escucha eventos y actúa (email).
- Configuración educativa y portable con Docker.
- Visualización de mensajes mediante Mailtrap.

---
