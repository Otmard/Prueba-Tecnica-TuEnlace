# Proyecto Backend con NestJS

Este proyecto es un backend desarrollado para la prueba tecnica.

## Requisitos previos

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes programas:

- **Node.js**: Asegúrate de tener instalada la versión 14 o superior de Node.js. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm** o **yarn**: Node.js viene con npm preinstalado, pero también puedes usar [yarn](https://yarnpkg.com/) como gestor de paquetes si lo prefieres.
- **Nest CLI**: El CLI de NestJS es una herramienta que facilita la creación y gestión de proyectos. Instálalo globalmente ejecutando:

  ```bash
  npm install -g @nestjs/cli
  ```
- **Mysql**: Asegúrate de tener un servicio de mySQL corriendo al cual puedas conectarte y tener las credenciales de Acceso
## Instalación

Sigue los siguientes pasos para instalar y ejecutar el backend en tu entorno local.

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/usuario/nestjs-backend.git
```

### 2. Instalar dependencias

Después de clonar el repositorio, instala las dependencias necesarias para ejecutar el proyecto. Puedes usar `npm`:

```bash
npm install
```

### 3. Configuración del entorno

Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Aquí tienes un ejemplo de cómo podría verse el archivo `.env`:

```bash
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=''
DB_DATABASE=prueba_tecnica
```

Asegúrate de ajustar estos valores de acuerdo a tu entorno de desarrollo

### 4. Iniciar la aplicación

Una vez configuradas las variables de entorno y la base de datos, puedes iniciar el servidor en modo de desarrollo ejecutando el siguiente comando:

```bash
npm run start:dev
```

Esto iniciará el servidor en el puerto definido en el archivo `.env` (por defecto `http://localhost:3000`).

### 5. Probar la API

Una vez que el servidor esté corriendo, puedes probar los endpoints del API utilizando herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/).

También puedes acceder a la documentación generada por Swagger (si está configurada) en la siguiente URL:

```bash
http://localhost:3000/api
```
