# 🍳 Cooking Safely – Frontend

Este proyecto forma parte del sistema "Cooking Safely", diseñado para gestionar productos alimentarios y registrar recetas elaboradas, con trazabilidad, autenticación de usuarios y control de stock.

---

## 📦 Tecnologías utilizadas

- **React + Vite**
- **React Router DOM** para la navegación
- **Axios** para peticiones HTTP
- **Firebase Authentication** para login y registro de usuarios
- **Context API** para la gestión del estado global de autenticación
- **Render** para el despliegue del frontend: https://full-stack-final-project-cooking-safety.onrender.com
- - **Figma** para el diseño.

---

## 🔐 Autenticación

- Autenticación de usuarios implementada con Firebase.
- Sistema de **login**, **registro** y **logout**.
- Rutas protegidas: Solo los usuarios autenticados pueden crear recetas.
- Redirección automática si el usuario no está autenticado.

---

## 📚 Rutas principales (Navegación)

| URL | Página | Descripción |
|:---|:---|:---|
| `/` | Home | Página principal de bienvenida |
| `/register` | Registro | Formulario de registro de usuario |
| `/login` | Login | Inicio de sesión de usuario |
| `/logout` | Logout | Cierre de sesión |
| `/products` | Productos | Listado de productos almacenados |
| `/products/new` | Nuevo producto | Formulario para crear un nuevo producto |
| `/products/:productId` | Detalle producto | Vista individual del producto seleccionado |
| `/recipes` | Recetas | Listado de recetas |
| `/recipes/new` | Nueva receta | Formulario para registrar una receta |
| `/recipes/:recipeId` | Detalle receta | Vista individual de una receta creada |
| `/under-construction` | En construcción | Página para secciones futuras |

---

## ✨ Funcionalidades destacadas

- **Listado de productos** y filtro por fecha de caducidad.
- **Creación de productos** (solo usuarios autenticados).
- **Visualización y borrado** de productos individuales.
- **Listado de recetas** y filtro por fecha de preparación.
- **Creación de recetas** seleccionando productos como ingredientes.
- **Visualización de recetas** con ingredientes y creador.
- **Sistema de login/logout** y control de navegación según estado de sesión.
- **Menú hamburguesa** responsive en dispositivos móviles.

---

## 🔪 Tests

- Pruebas manuales en navegador.
- Control de errores con mensajes amigables en formulario de login, creación de producto y creación de receta.

Próximos pasos: Automatización de tests de navegación y autenticación con herramientas como **Cypress**.

---
