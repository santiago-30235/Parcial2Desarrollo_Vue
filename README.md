# 🎮 GamerShop

Aplicación web desarrollada con **Vue 3**, **Vite** y **Bootstrap 5.3**, como evidencia del **Segundo Parcial** de la asignatura **Desarrollo de Aplicaciones Web**.

El proyecto representa una **tienda gamer** en línea donde se pueden gestionar productos (audífonos, controles, mouse, teclados) de forma dinámica, utilizando **componentes reutilizables**, **rutas anidadas**, y **consumo de una API externa real**.

---

## 🧱 Descripción general del negocio y objetivo de la aplicación

**GamerShop** es una tienda virtual especializada en productos para gamers.  
Su objetivo es demostrar la implementación de una aplicación **modular, responsiva y funcional** usando **Vue.js 3** y **Bootstrap**, con las siguientes características:

- Login educativo de usuario.  
- Navegación dentro de un panel administrativo (Dashboard).  
- Gestión de productos con operaciones CRUD.  
- Consumo de una **API externa pública (FakeStore API)**.  
- Uso de **componentes reutilizables** y **rutas anidadas**.



## ⚙️ Estructura y modularización del proyecto

El proyecto está organizado de forma **modular** en carpetas separadas según su función:


src/
 ├── assets/           # Imágenes y recursos estáticos
 ├── components/       # Componentes reutilizables (Navbar, Sidebar, Footer, ProductCard)
 ├── router/           # Configuración de rutas con vue-router
 ├── services/         # Archivo para consumir la API externa (productService.js)
 ├── views/            # Vistas principales (LoginView, DashboardView, ProductView)
 ├── App.vue           # Punto de entrada de la aplicación
 └── main.js           # Configuración principal de Vue y router
```

### 🧩 Componentes reutilizables
- **NavbarComponent.vue:** Encabezado superior con el nombre del negocio.  
- **SidebarComponent.vue:** Menú lateral con navegación a las rutas del dashboard.  
- **FooterComponent.vue:** Pie de página con derechos reservados.  
- **ProductCard.vue:** Tarjeta visual para mostrar productos (nombre, precio, imagen, botón).

### 📘 Vistas principales
- **LoginView.vue:** Formulario de acceso educativo.  
- **DashboardView.vue:** Vista principal que contiene Navbar, Sidebar y Footer.  
- **ProductView.vue:** Sección de productos, conectada con la API externa.

### 🛣️ Rutas configuradas
- `/login` → Vista de inicio de sesión  
- `/dashboard` → Panel principal  
- `/dashboard/productos` → Listado y gestión de productos  



## 🌐 Ejemplo de consumo de la API externa

**Archivo:** `src/services/productService.js`

```js
export async function obtenerProductos() {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const data = await respuesta.json();
  return data;
}
```

**Uso dentro de ProductView.vue**

```js
import { obtenerProductos } from "../services/productService.js";

export default {
  data() {
    return {
      productos: []
    };
  },
  async mounted() {
    try {
      this.productos = await obtenerProductos();
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }
};
```
Con esto, el proyecto **consume una API externa real (FakeStore API)**



## 🔄 Comunicación entre componentes (props y eventos)

**ProductView.vue**

```vue
<ProductCard v-for="p in productos" :key="p.id" :producto="p" />
```

**ProductCard.vue**

```vue
<script>
export default {
  props: ["producto"]
}
</script>
```

➡️ El **padre (`ProductView`)** envía los datos de cada producto al **hijo (`ProductCard`)** mediante **props**, demostrando comunicación efectiva entre componentes.



## 🎨 Estilos y coherencia visual

- Se utiliza **Bootstrap 5.3** para una interfaz limpia, moderna y responsiva.  
- Colores oscuros personalizados coherentes con la temática gamer.  
- Tipografía y espaciado consistentes en todos los componentes.  
- Navbar, Sidebar, Footer y tarjetas mantienen la misma línea visual.  

Ejemplo:

```vue
<footer class="bg-dark text-white text-center py-3">
  © 2025 GamerShop. Todos los derechos reservados.
</footer>
```



## 👥 Evidencia de trabajo colaborativo

Repositorio público en GitHub con commits y ramas de desarrollo:  
🔗 https://github.com/santiago-30235/Parcial2Desarrollo_Vue.git


## 🧠 Tecnologías utilizadas

- Vue.js 3  
- Vue Router  
- Bootstrap 5.3  
- Vite  
- FakeStore API  

## 🔐 Credenciales del login (modo educativo)

- **Usuario:** futbol  
- **Contraseña:** 1234  


✳️ **Autor:** Santiago Vila 192454 - Eduardo Avendaño 192441
📆 **Materia:** Desarrollo de Aplicaciones Web  
🏫 **Segundo Parcial – GamerShop**

## Nota:Esta APP solo es para Fines Educativos 