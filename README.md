# Proyecto MVP Backend - Node.js con Express.js

Este proyecto es el backend para el MVP de una aplicación React/Next.js. Su objetivo principal es proporcionar una API para la autenticación de usuarios mediante JWT y gestionar la comunicación con una base de datos MySQL.

## Tecnologías Utilizadas

* **Node.js con Express.js (4.21.2)** → Framework web para Node.js.
* **MySQL ()** → Cliente para conectarse a MySQL.
* **CORS (2.8.5)** → Permite peticiones desde el frontend.
* **Dotenv (16.4.7)** → Manejo de variables de entorno.
* **JSON Web Token (JWT) (9.0.2)** → Manejo de JWT para autenticación.
* **Bcrypt (5.1.1) y BcryptJS (2.4.3)** → Hashing de contraseñas.

# 🔐 React MVP - Backend

Este es el backend del MVP educativo para el estudio y comprensión de React. Su objetivo es proveer endpoints básicos de autenticación para demostrar cómo interactuar con un servidor desde un frontend en React usando Axios.

El backend está construido con Node.js y Express, y utiliza SQLite como base de datos ligera y persistente. Es ideal para entornos de desarrollo y ejemplos didácticos.

---

## ⚙️ Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **SQLite3**
- **JWT (JSON Web Tokens)** – para autenticación
- **bcryptjs** – para encriptación de contraseñas
- **dotenv** – para manejo de variables de entorno
- **Sequelize** - Al usar Sequelize, el esquema se gestiona en el código y se sincroniza automáticamente, pero si en algún momento requieres un control más fino (versionado, rollback, etc.), se podría migrar a usar las migraciones de Sequelize en lugar de SQL crudo.
---

## 🗂️ Estructura del proyecto

Una vista simplificada de la estructura del backend, explicando el propósito de cada carpeta y archivo clave:

- 📁 `src/` Carpeta principal del backend.
  
  - 📁 `config/` Configuraciones generales.  
    - 📄 `database.js` – Configura y conecta a SQLite  
    - 📄 `jwt.js` – Define el secreto para firmar tokens JWT

  - 📁 `controllers/` Lógica de negocio (por ejemplo, login y registro).  
    - 📄 `authController.js` – Controlador de autenticación

  - 📁 `middlewares/` Funciones intermedias para proteger rutas.  
    - 📄 `authMiddleware.js` – Verifica tokens JWT

  - 📁 `models/` Representación de datos.  
    - 📄 `User.js` – Modelo de usuario usando SQLite

  - 📁 `routes/` Define los endpoints de la API.  
    - 📄 `authRoutes.js` – Rutas de login y registro

  - 📄 `app.js` Inicializa Express y configura middlewares

- 📄 `index.js`  Punto de entrada del servidor

- 📄 `.env`  Variables de entorno (JWT_SECRET, PORT, etc.)

- 📄 `database.sqlite` Base de datos local generada por el sistema

- 📄 `package.json` Dependencias y scripts del proyecto

- 📄 `README.md` Este documento


---

## 🔑 Funcionalidades principales

- Registro de nuevos usuarios
- Login con generación de token JWT
- Middleware de autenticación para proteger rutas privadas
- Almacenamiento de usuarios en base de datos SQLite

---

## 🧪 Endpoints disponibles

| Método | Ruta           | Descripción                |
|--------|----------------|----------------------------|
| POST   | `/api/register` | Crear nuevo usuario        |
| POST   | `/api/login`    | Autenticar y devolver JWT  |
| GET    | `/api/protected`| Ruta protegida de ejemplo  |

> 💡 Puedes agregar más rutas protegidas usando el middleware `authMiddleware.js`.

---

## 🚀 Cómo ejecutar el backend

## Instalación
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/mi-mvp-react.git
2. **Navega al directorio del proyecto:**
   ```bash
   cd mi-mvp-react
3. **Instala las dependencias:**
   ```bash
   npm install
4. **Crea un archivo .env con el siguiente contenido:**
   'JWT_SECRET=tu_clave_secreta'
   'PORT=5000'

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npx nodemon index.js

## 🧠 Enfoque educativo

Este backend fue construido con un enfoque formativo para complementar el aprendizaje de React y el desarrollo de aplicaciones fullstack.

- 🔐 **Autenticación JWT simplificada:** Se incluye un flujo completo de registro, login y protección de rutas, explicado paso a paso.
- 🧠 **Código comentado:** Cada parte clave del código (controladores, rutas, middleware) está comentada para facilitar su comprensión.
- 🗂️ **Estructura clara:** Separación de responsabilidades mediante carpetas bien definidas (`controllers`, `routes`, `middlewares`, etc.).
- 🧪 **Endpoints fáciles de probar:** Las rutas están listas para ser testeadas con herramientas como Postman o Insomnia.
- 💾 **Base de datos ligera:** Se usa SQLite, ideal para evitar configuraciones complicadas y facilitar la persistencia de datos en local.
- 🔄 **Integración pensada para el frontend:** El backend está diseñado para conectarse de forma directa con el frontend React de este mismo MVP, usando Axios.

Este backend busca que quienes lo estudien no solo aprendan a "usar" un API, sino también a **entender cómo está construido**.
