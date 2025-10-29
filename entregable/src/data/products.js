import oudWood from "../assets/image/oud_wood.jpg";
import aventus from "../assets/image/aventus.jpg"
import Baccarat from "../assets/image/Baccarat.webp"
import milion from "../assets/image/1_million.jpg"

const products = [
  // Premium (3)
  {
    id: 1,
    name: "Tom Ford Oud Wood",
    description: "Amaderado oriental - Alta gama",
    stock: 4,
    image: oudWood,
    price: 270,
    category: "premium"
  },
  {
    id: 2,
    name: "Creed Aventus",
    description: "Afrutado amaderado - Exclusivo y elegante",
    stock: 6,
    image: aventus,
    price: 250,
    category: "premium"
  },
  {
    id: 3,
    name: "Baccarat Rouge 540",
    description: "Ámbar dulce de lujo",
    stock: 5,
    image: Baccarat,
    price: 300,
    category: "premium"
  },

  // Florales (3)
  {
    id: 4,
    name: "Marc Jacobs Daisy",
    description: "Floral fresco juvenil",
    stock: 10,
    image: "/image/daisy.jpg",
    price: 90,
    category: "florales"
  },
  {
    id: 5,
    name: "Gucci Bloom",
    description: "Floral intenso elegante",
    stock: 8,
    image: "/image/gucci_bloom.jpg",
    price: 110,
    category: "florales"
  },
  {
    id: 6,
    name: "Chanel Gabrielle",
    description: "Floral sofisticado",
    stock: 6,
    image: "/image/gabrielle.jpg",
    price: 150,
    category: "florales"
  },

  // Cítricos (3)
  {
    id: 7,
    name: "Light Blue - D&G",
    description: "Cítrico fresco veraniego",
    stock: 12,
    image: "/image/light_blue.jpg",
    price: 85,
    category: "citrico"
  },
  {
    id: 8,
    name: "Versace Eau Fraîche",
    description: "Cítrico aromático masculino",
    stock: 9,
    image: "/image/versace_fraiche.jpg",
    price: 95,
    category: "citrico"
  },
  {
    id: 9,
    name: "Acqua di Gio",
    description: "Cítrico acuático",
    stock: 11,
    image: "/image/acqua_gio.jpg",
    price: 130,
    category: "citrico"
  },

  // Orientales / Ámbar (3)
  {
    id: 10,
    name: "YSL Black Opium",
    description: "Ámbar dulce nocturno",
    stock: 7,
    image: "/image/black_opium.jpg",
    price: 130,
    category: "orientales"
  },
  {
    id: 11,
    name: "Paco Rabanne 1 Million",
    description: "Oriental especiado",
    stock: 11,
    image: milion,
    price: 120,
    category: "orientales"
  },
  {
    id: 12,
    name: "Armani Code",
    description: "Oriental cálido y elegante",
    stock: 8,
    image: "/image/armani_code.jpg",
    price: 140,
    category: "orientales"
  },

  // Chipre (3)
  {
    id: 13,
    name: "Miss Dior",
    description: "Chipre floral clásico",
    stock: 6,
    image: "/image/miss_dior.jpg",
    price: 150,
    category: "chipre"
  },
  {
    id: 14,
    name: "Coco Mademoiselle",
    description: "Chipre moderno sofisticado",
    stock: 8,
    image: "/image/coco_m.jpg",
    price: 160,
    category: "chipre"
  },
  {
    id: 15,
    name: "Aromatics Elixir",
    description: "Chipre intenso y profundo",
    stock: 5,
    image: "/image/aromatics_elixir.jpg",
    price: 140,
    category: "chipre"
  },

  // Fougère (3)
  {
    id: 16,
    name: "Dior Sauvage",
    description: "Aromático fougère masculino",
    stock: 10,
    image: "/image/sauvage.jpg",
    price: 140,
    category: "fougere"
  },
  {
    id: 17,
    name: "Azzaro Pour Homme",
    description: "Fougère clásico intenso",
    stock: 9,
    image: "/image/azzaro.jpg",
    price: 75,
    category: "fougere"
  },
  {
    id: 18,
    name: "Prada Luna Rossa",
    description: "Aromático fougère moderno",
    stock: 8,
    image: "/image/luna_rossa.jpg",
    price: 120,
    category: "fougere"
  },

  // Gourmand (3)
  {
    id: 19,
    name: "Angel - Thierry Mugler",
    description: "Dulce intenso y adictivo",
    stock: 6,
    image: "/image/angel.jpg",
    price: 135,
    category: "gourmand"
  },
  {
    id: 20,
    name: "La Vie Est Belle",
    description: "Gourmand elegante femenino",
    stock: 8,
    image: "/image/la_vie_est_belle.jpg",
    price: 145,
    category: "gourmand"
  },
  {
    id: 21,
    name: "Jean Paul Gaultier Scandal",
    description: "Gourmand caramelado",
    stock: 7,
    image: "/image/scandal.jpg",
    price: 125,
    category: "gourmand"
  }
]

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 2000)
  })
}

export default getProducts;
