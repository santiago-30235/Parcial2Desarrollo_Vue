<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
    <div class="card p-4 shadow" style="width: 300px;">
      <h3 class="text-center mb-3">GamerShop</h3>
      <input v-model="usuario" class="form-control mb-2" placeholder="Usuario">
      <input v-model="contrasena" type="password" class="form-control mb-2" placeholder="Contraseña">
      <button @click="login" class="btn btn-primary w-100">Ingresar</button>
      <div v-if="error" class="alert alert-danger mt-3 text-center">Credenciales incorrectas</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { usuario: '', contrasena: '', error: false }
  },
  methods: {
    async login() {
      const res = await fetch('/usuarios.json')
      const data = await res.json()
      const valido = data.find(u => u.usuario === this.usuario && u.contrasena === this.contrasena)
      if (valido) this.$router.push('/dashboard/productos')
      else this.error = true
    }
  }
}
</script>
