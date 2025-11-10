<template>
  <div class="card shadow-sm text-center">
    <img :src="producto.imagen" class="card-img-top" style="height:180px; object-fit:cover;">
    <div class="card-body">
      <h6>{{ producto.nombre }}</h6>
      <p class="text-success fw-bold">{{ producto.precio }}</p>
      <button class="btn btn-sm btn-primary">Ver más</button>
    </div>
  </div>
</template>

<script>
export default { props: ['producto'] }
</script>
