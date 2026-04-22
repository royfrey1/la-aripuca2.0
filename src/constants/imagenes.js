const S3_BASE_URL = "https://portfolio-roy-proyectos.s3.sa-east-1.amazonaws.com";

export const aripukaData = {
  paisajes: [
    { id: 1, url: `${S3_BASE_URL}/paisajes/paisaje-4.jpg`, desc: "Vista frontal durante el dia" },
    { id: 2, url: `${S3_BASE_URL}/paisajes/paisaje.jpg`, desc: "Lago artificial dentro del atractivo" },
    { id: 3, url: `${S3_BASE_URL}/paisajes/paisaje-2.jpg`, desc: "Vista lateral" },
    { id: 4, url: `${S3_BASE_URL}/paisajes/paisaje-3.jpg`, desc: "Vista frontal durante la noche" },
    { id: 5, url: `${S3_BASE_URL}/paisajes/paisaje-5.jpg`, desc: "El Tacurú" },
    { id: 6, url: `${S3_BASE_URL}/paisajes/paisaje-6.jpg`, desc: "Vista a laguna" },
  ],
  maderas: [
    { id: 1, url: `${S3_BASE_URL}/maderas/madera.jpg`, nombre: "Guaicá, Laurel, Camboatá" },
    { id: 2, url: `${S3_BASE_URL}/maderas/madera-1.jpg`, nombre: "Palo Amargo, Pino-Araucaria, Ceibo" },
    { id: 3, url: `${S3_BASE_URL}/maderas/madera-2.jpg`, nombre: "Azota-Caballo, Incienso" },
    { id: 4, url: `${S3_BASE_URL}/maderas/madera-3.jpg`, nombre: "Corte y vista del interior del árbol" },
    { id: 5, url: `${S3_BASE_URL}/maderas/madera4.jpg`, nombre: "Entrada del parque" },
    { id: 6, url: `${S3_BASE_URL}/maderas/madera6.jpg`, nombre: "Caroba" },

],
  artesanias: [
    { id: 1, url: `${S3_BASE_URL}/Artesanias/trampa.jpg`, item: "Trampa de madera" },
    { id: 2, url: `${S3_BASE_URL}/Artesanias/artesanias-1.jpg`, item: "Arte tallado" },
    { id: 3, url: `${S3_BASE_URL}/Artesanias/artesanias.jpg`, item: "Artesanias indigenas" },
    { id: 4, url: `${S3_BASE_URL}/Artesanias/artesanias-3.jpg`, item: "Artesanias indigenas" },
  ],

sabores: [
    {
      id: 1,
      titulo: "Helados de Yerba Mate",
      descripcion: "El sabor insignia de la región transformado en un postre refrescante y artesanal.",
      url: "https://www.aripuca.com.ar/wp-content/uploads/2025/02/La-aripuca-helado.jpg",
      clase: "md:col-span-2 md:row-span-2" 
    },
    {
      id: 2,
      titulo: "Confituras de Madera",
      descripcion: "Tablas confitadas de madera en almibar.",
      url: "https://www.aripuca.com.ar/wp-content/uploads/2025/02/La-aripuca-dulce-madera-927x1024.jpg",
      clase: "md:col-span-2 md:row-span-1"
    },
    {
      id: 3,
      titulo: "Gastronomía Regional",
      descripcion: "Platos típicos en nuestro restaurante 'Las Termitas'.",
      url: "https://www.aripuca.com.ar/wp-content/uploads/2025/03/F.jpg",
      clase: "md:col-span-2 md:row-span-1"
    }
  ]

}; 