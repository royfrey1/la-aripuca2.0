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
    { id: 1, url: `${S3_BASE_URL}/maderas/madera.jpg`, nombre: "Lapacho Negro" },
    { id: 2, url: `${S3_BASE_URL}/maderas/madera-1.jpg`, nombre: "Cedro Misionero" },
    { id: 3, url: `${S3_BASE_URL}/maderas/madera-2.jpg`, nombre: "Sombra de Toro" },
    { id: 4, url: `${S3_BASE_URL}/maderas/madera-3.jpg`, nombre: "Cedro Misionero" },
    { id: 5, url: `${S3_BASE_URL}/maderas/madera4.jpg`, nombre: "Cedro Misionero" },
    { id: 6, url: `${S3_BASE_URL}/maderas/madera6.jpg`, nombre: "Cedro Misionero" },

],
  artesanias: [
    { id: 1, url: `${S3_BASE_URL}/Artesanias/trampa.jpg`, item: "Trampa de madera" },
    { id: 2, url: `${S3_BASE_URL}/Artesanias/artesanias-1.jpg`, item: "Arte tallado" },
    { id: 3, url: `${S3_BASE_URL}/Artesanias/artesanias.jpg`, item: "Arte tallado" },
    { id: 4, url: `${S3_BASE_URL}/Artesanias/artesanias-3.jpg`, item: "Arte tallado" },
  ]
}; 