<template>
  <div class="bg-light vh-100 p-3" style="width: 200px;">
    <h6>Menú</h6>

    <!-- Botón para ir a productos -->
    <router-link 
      to="/dashboard/productos" 
      class="btn btn-outline-primary w-100 mt-2">
      Productos
    </router-link>

    <!-- Botón para ir a Acerca de -->
    <router-link 
      to="/about" 
      class="btn btn-outline-info w-100 mt-2">
      Acerca de
    </router-link>

    <!-- Botón para salir -->
    <router-link 
      to="/login" 
      class="btn btn-outline-danger w-100 mt-3">
      Salir
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent"
};
</script>
