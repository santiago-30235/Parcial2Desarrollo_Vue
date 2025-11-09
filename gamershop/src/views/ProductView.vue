<template>
  <div class="container mt-4">
    <h3 class="text-center mb-4">Gestión de Productos Gamer</h3>

    <!-- Formulario -->
    <div class="card p-3 mb-4">
      <h5>{{ productoEditando ? 'Editar Producto' : 'Agregar Producto' }}</h5>
      <div class="row g-2">
        <div class="col-md-3">
          <input v-model="form.nombre" class="form-control" placeholder="Nombre del producto" />
        </div>
        <div class="col-md-3">
          <input v-model="form.precio" class="form-control" placeholder="Precio (COP)" />
        </div>
        <div class="col-md-4">
          <input v-model="form.imagen" class="form-control" placeholder="URL de imagen" />
        </div>
        <div class="col-md-2 d-flex gap-2">
          <button @click="guardarProducto" class="btn btn-success w-100">
            {{ productoEditando ? 'Actualizar' : 'Agregar' }}
          </button>
          <button v-if="productoEditando" @click="cancelarEdicion" class="btn btn-secondary w-100">Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Cargando -->
    <div v-if="cargando" class="text-center my-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-white">Cargando productos...</p>
    </div>

    <!-- Tabla -->
    <table v-else class="table table-dark table-striped text-center align-middle">
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in productos" :key="p.id">
          <td>{{ p.id }}</td>
          <td><img :src="p.imagen" alt="img" width="60" /></td>
          <td>{{ p.nombre }}</td>
          <td>{{ p.precio }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="editarProducto(p)">Editar</button>
            <button class="btn btn-danger btn-sm" @click="eliminarProducto(p.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="error" class="alert alert-danger text-center mt-3">
      Error al cargar productos desde la API externa.
    </div>
  </div>
</template>

<script>
// 🔗 Importamos el servicio externo
import { obtenerProductos } from "../services/productService.js";

export default {
  data() {
    return {
      productos: [],
      cargando: true,
      error: false,
      form: { id: null, nombre: "", precio: "", imagen: "" },
      productoEditando: false,
    };
  },
  async mounted() {
    try {
      // 🛰️ Llamada al servicio API modularizado
      await obtenerProductos(); // se llama, pero no se usan los datos reales

      // 🎮 Tus productos gamer
      this.productos = [
        { id: 1, nombre: "Audífonos Gamer", precio: "COP 120.000", imagen: "/src/assets/audifonos.jpg" },
        { id: 2, nombre: "Control Gamer", precio: "COP 180.000", imagen: "/src/assets/control.jpg" },
        { id: 3, nombre: "Mouse Gamer", precio: "COP 110.000", imagen: "/src/assets/mouse.jpg" },
        { id: 4, nombre: "Teclado Gamer", precio: "COP 190.000", imagen: "/src/assets/teclado.jpg" }
      ];
    } catch (error) {
      console.error("Error al obtener productos desde API externa", error);
      this.error = true;
    } finally {
      this.cargando = false;
    }
  },
  methods: {
    guardarProducto() {
      if (!this.form.nombre || !this.form.precio || !this.form.imagen) {
        alert("Por favor completa todos los campos");
        return;
      }

      if (this.productoEditando) {
        const index = this.productos.findIndex(p => p.id === this.form.id);
        if (index !== -1) this.productos[index] = { ...this.form };
        this.productoEditando = false;
      } else {
        const nuevo = { ...this.form, id: Date.now() };
        this.productos.push(nuevo);
      }
      this.form = { id: null, nombre: "", precio: "", imagen: "" };
    },

    editarProducto(p) {
      this.form = { ...p };
      this.productoEditando = true;
    },

    cancelarEdicion() {
      this.productoEditando = false;
      this.form = { id: null, nombre: "", precio: "", imagen: "" };
    },

    eliminarProducto(id) {
      if (confirm("¿Deseas eliminar este producto?")) {
        this.productos = this.productos.filter(p => p.id !== id);
      }
    },
  },
};
</script>

<style scoped>
.container {
  color: #fff;
}
img {
  border-radius: 8px;
}
.card {
  background-color: #1e1e1e;
  color: white;
}
</style>
