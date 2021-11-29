const products = [
  {
    id: "1",
    name: "Posavasos verde agua x4",
    description: "6 posavasos redondos color verde agua. ",
    category: "posavasos",
    image:
      "https://media.glasscastresin.com/contentimages/extralarge/Turquoise-Alcohol-Ink-and-Resin-Coasters",
    price: "790",
  },
  {
    id: "2",
    name: "Cuadro coliflor",
    description: "Cuadro de colifor creado con pinturas a base de alcohol",
    category: "cuadros",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f0oWhS4IuH2RmdBIO2qsy3BD_Y4f1wli4w&usqp=CAU",
    price: "1120",
  },
  {
    id: "3",
    name: "Posavasos negros x4",
    description: "posavasos redondos negros",
    category: "posavasos",
    image:
      "https://media.glasscastresin.com/contentimages/extralarge/Navy-Alcohol-Ink-and-Resin-Coasters",
    price: "790",
  },
  {
    id: "4",
    name: "Cuadro alcohol ink ",
    description: "Cuadro creado a base de pinturas de alcohol. Dimensiones:",
    category: "cuadros",
    image:
      "https://i.pinimg.com/736x/a5/e8/55/a5e855d9ccb07bee1858e78510440ff3.jpg",
    price: "1890",
  },
  {
    id: "5",
    name: "Bandeja",
    description: "bandeja decorada con alcohol ink. Dimensiones ",
    category: "otros",
    image:
      "https://i.pinimg.com/originals/0c/5c/81/0c5c81d9b7d753280e986bd15f9a7deb.jpg",
    price: "1590",
  },
  {
    id: "6",
    name: "Taza",
    description: "Taza decorada",
    category: "otros",
    image: "https://farm1.staticflickr.com/790/26387291507_977acea054_z.jpg",
    price: "90",
  },
];

export const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 4000);
});
