
export async function obtenerProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    if (!respuesta.ok) throw new Error("Error al conectar con la API externa");
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}
