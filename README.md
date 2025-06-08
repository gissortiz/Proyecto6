# 🚀 Proyecto 6 - API de Reservas de Servicios

Este es un proyecto de API REST construida con **Node.js**, **Express** y **MongoDB**, que permite gestionar usuarios, servicios y reservas.  
Además, cuenta con autenticación con **JWT** y documentación de API con **Swagger**.

---

## 📚 Tecnologías utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (Json Web Token) para autenticación
- Swagger UI para documentación
- Cors
- Dotenv
- Render (para producción)

---

## 🎯 Funcionalidades

✅ Gestión de **usuarios**:

- Crear usuario (`POST /api/users/create`)
- Actualizar usuario (`PUT /api/users/:id`)
- Login (`POST /api/users/login`)
- Verificar usuario autenticado (`GET /api/users/verify-user`)

---

✅ Gestión de **servicios**:

- Crear servicio (`POST /api/services`)
- Obtener todos los servicios (`GET /api/services`)
- Obtener servicio por ID (`GET /api/services/:id`)
- Actualizar servicio (`PUT /api/services/:id`)
- Eliminar servicio (`DELETE /api/services/:id`)

---

✅ Gestión de **reservas**:

- Crear reserva (`POST /api/reservations`)
- Obtener todas las reservas (`GET /api/reservations`)
- Actualizar reserva (`PUT /api/reservations/:id`)
- Eliminar reserva (`DELETE /api/reservations/:id`)

---

## 🔐 Seguridad

- Rutas protegidas con JWT (por ejemplo: `/api/users/verify-user`).
- Se incluye esquema de seguridad en Swagger para probar con token.

---

## 📝 Documentación de API

Disponible en:

http://localhost:3000/api-docs

---

## ⚙️ Instalación y ejecución local

2️⃣ Instalar dependencias:

npm install

3️⃣ Crear archivo .env con tus variables de entorno:

PORT=3000
MONGO_URI=mongodb+srv://<tu_uri_mongo>
SECRET=tu_clave_secreta

4️⃣ Ejecutar en desarrollo:

npm run dev

🚀 Deploy
El proyecto está preparado para deploy en:

✅ Render
✅ Railway
✅ Heroku (opcional, si se desea)

🗂️ Estructura del proyecto

src/
├── config/
│   ├── db.js
│   ├── swagger.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── index.js

🤝 Autora

Gissella Ortiz
Bootcamp Full Stack Developer


