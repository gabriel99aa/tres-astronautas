# Proyecto Next.js 14 con App Routing

Este es un proyecto desarrollado con **Next.js versión 14**, utilizando **App Routing** para la gestión de rutas. Se ha implementado **arquitectura hexagonal** y el código está escrito en **TypeScript**.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- **Node.js** (versión 16 o superior)
- **npm** (versión 8 o superior) o **yarn** como gestor de paquetes

Puedes verificar si tienes Node.js y npm instalados ejecutando los siguientes comandos en la terminal:

```bash
node -v
npm -v
```

Si no los tienes instalados, puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Instalación y Ejecución

Para ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo con:
   ```bash
   npm run dev
   ```

4. Abre el navegador en la dirección proporcionada por la terminal (por defecto suele ser `http://localhost:3000`).

## Estado Global

Para la gestión del estado global se ha utilizado **Zustand**, configurado para almacenar los datos en **sessionStorage** en lugar de **localStorage**. Esto permite que los datos del estado global se mantengan únicamente durante la sesión del usuario y no persistan después de cerrar la pestaña o el navegador.

## Estructura del Proyecto

El proyecto sigue una **arquitectura hexagonal**, lo que permite una separación clara entre la lógica de negocio, las interfaces y las implementaciones. Esto facilita la escalabilidad y el mantenimiento del código.

Si tienes alguna duda o sugerencia, ¡no dudes en contribuir o abrir un issue en el repositorio!
