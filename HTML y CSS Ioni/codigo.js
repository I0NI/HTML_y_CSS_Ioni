// Obtener todos los botones de navegación
const buttons = document.querySelectorAll(".nav-button");

// Obtener el cuadro modal y el botón de cierre
const modal = document.getElementById("myModal");
const closeButton = modal.querySelector(".close");

// Obtener el elemento de contenido del modal
const modalContent = modal.querySelector(".modal-content");

// Agregar un evento de clic al botón de cierre para ocultar el modal
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

// Agregar un evento de clic a cada botón de navegación
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Obtener el nombre del país desde el botón clicado
    const countryName = this.querySelector("figcaption").textContent;

    // Obtener el contenido de las curiosidades para el país seleccionado
    const curiosities = obtenerCuriosidadesPorPais(countryName);

    // Llenar el modal con la información del país
    modalContent.innerHTML = `
      <span class="close">&times;</span>
      <h2>Curiosidades de ${countryName}</h2>
      <ul>
        ${curiosities.map((curiosity) => `<li>${curiosity}</li>`).join("")}
      </ul>
    `;

    // Mostrar el contenido del modal
    modalContent.style.display = "block";

    // Mostrar el modal
    modal.style.display = "block";
  });
});

// Función para obtener curiosidades por país
function obtenerCuriosidadesPorPais(pais) {
  switch (pais) {
    case "Costa Rica":
      return [
        "Costa Rica es conocida por su impresionante biodiversidad y es el hogar del 5% de la biodiversidad del mundo.",
        "Es uno de los países más pacíficos del mundo y no tiene ejército desde 1949.",
        "Costa Rica alberga varios volcanes activos y más de 200 montañas.",
        "Es uno de los principales destinos de eco-turismo en el mundo.",
        "El lema nacional de Costa Rica es 'Pura Vida,' que se traduce como 'Vida Pura' o 'Pura Vida' en español."
      ];

    case "El Salvador":
      return [
        "El Salvador es el país más pequeño de América Central.",
        "Su moneda oficial es el dólar estadounidense.",
        "El Salvador es famoso por sus playas, especialmente en la costa del Pacífico.",
        "Es conocido por su rica tradición gastronómica, incluyendo la famosa pupusa.",
        "El Salvador ha experimentado un crecimiento significativo en la industria de la tecnología en los últimos años."
      ];
    
      case "Guatemala":
        return [
          "Guatemala es conocida por su rica herencia cultural, incluidas las antiguas ruinas mayas.",
          "El volcán de Fuego en Guatemala es uno de los volcanes más activos de América Central.",
          "El quetzal, un ave colorida, es el ave nacional de Guatemala.",
          "Guatemala cuenta con una variedad de paisajes, desde selvas tropicales hasta altiplanos montañosos.",
          "El Lago de Atitlán en Guatemala es famoso por su belleza escénica y su agua cristalina."
        ];
  
      case "Honduras":
        return [
          "Honduras tiene una costa caribeña y una costa del Pacífico, lo que lo convierte en un lugar ideal para el buceo.",
          "Las ruinas mayas de Copán en Honduras son Patrimonio de la Humanidad por la UNESCO.",
          "Honduras es famosa por su producción de café de alta calidad.",
          "El Parque Nacional La Tigra es el primer parque nacional de Honduras y es un lugar de gran belleza natural.",
          "La gastronomía hondureña incluye platos tradicionales como el 'baleada' y el 'plátano frito'."
        ];
  
      case "Nicaragua":
        return [
          "Nicaragua alberga el lago más grande de América Central, el lago Cocibolca (o lago de Nicaragua).",
          "Tiene una cadena de volcanes activos conocida como 'Anillo de Fuego'.",
          "Nicaragua es famosa por su historia revolucionaria y su literatura.",
          "El volcán Concepción en la isla de Ometepe es uno de los volcanes más impresionantes de Nicaragua.",
          "La ciudad colonial de Granada es un importante destino turístico en Nicaragua."
        ];
  
      case "Panamá":
        return [
          "El Canal de Panamá es uno de los logros de ingeniería más importantes del mundo y conecta el océano Atlántico con el océano Pacífico.",
          "Panamá es el único lugar en el mundo donde puedes ver el amanecer en el océano Atlántico y el atardecer en el océano Pacífico en el mismo día.",
          "El balboa es la moneda oficial de Panamá, aunque el dólar estadounidense es ampliamente utilizado.",
          "El casco antiguo de la Ciudad de Panamá, conocido como Casco Viejo, es un sitio de Patrimonio Mundial de la UNESCO.",
          "El Archipiélago de Bocas del Toro en Panamá es famoso por sus hermosas playas y la vida marina."
        ];
  
      case "Belice":
        return [
          "Belice es el único país de América Central donde el inglés es el idioma oficial.",
          "Tiene el segundo sistema de barrera de coral más grande del mundo, el Gran Agujero Azul.",
          "Belice es conocido por su diversidad étnica y cultural.",
          "El Parque Nacional Tikal es un sitio arqueológico maya impresionante que se encuentra en la región de Belice.",
          "El beliceño es la moneda oficial de Belice, pero el dólar estadounidense es ampliamente aceptado."
        ];

    default:
      return [];
  }
}



