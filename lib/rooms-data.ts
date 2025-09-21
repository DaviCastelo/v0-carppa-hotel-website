export const rooms = [
  {
    id: "standard-duplo",
    name: "Standard Duplo",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 240",
    image: "/modern-hotel-room-with-double-bed.jpg",
    capacity: "3 pessoas",
    size: "25m²",
    beds: "1 cama de casal",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre", 
      "Internet Wireless",
      "Mini-Bar",
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: "standard-triplo", 
    name: "Standard Triplo",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 300",
    image: "/deluxe-hotel-room-with-double-bed-and-single-bed.jpg",
    capacity: "3 pessoas",
    size: "30m²", 
    beds: "1 cama de casal + 1 solteiro",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless", 
      "Mini-Bar",
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.6,
    reviews: 112,
  },
  {
    id: "standard-quadruplo",
    name: "Standard Quadruplo", 
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 294,40",
    image: "/family-hotel-room-with-multiple-beds.jpg",
    capacity: "4 pessoas",
    size: "35m²",
    beds: "2 camas de casal",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless",
      "Banheiro privado",
      "Telefone",
      "Apartamento para não Fumantes",
      "Mini-Bar",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.7,
    reviews: 156,
  }
]

export const roomDetails = {
  "standard-duplo": {
    name: "Standard Duplo",
    capacity: 3,
    beds: "1 cama de casal",
    bathrooms: 1,
    hasSuite: false,
    price: "240,00",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    images: [
      "/modern-hotel-room-with-double-bed.jpg", 
      "/modern-hotel-room-with-double-bed-and-elegant-deco.jpg",
      "/hotel-room-work-desk-and-seating-area.jpg"
    ],
    amenities: [
      "Ar Condicionado",
      "Cofre", 
      "Internet Wireless",
      "Mini-Bar",
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/33108?c=1159&q=1393",
  },
  "standard-triplo": {
    name: "Standard Triplo",
    capacity: 3,
    beds: "1 cama de casal + 1 solteiro",
    bathrooms: 1,
    hasSuite: false,
    price: "300,00",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    images: [
      "/deluxe-hotel-room-with-double-bed-and-single-bed.jpg",
      "/spacious-hotel-room-with-seating-area.jpg", 
      "/modern-hotel-bathroom-with-premium-fixtures.jpg"
    ],
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless",
      "Mini-Bar", 
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/33109?c=1159&q=1393",
  },
  "standard-quadruplo": {
    name: "Standard Quadruplo",
    capacity: 4,
    beds: "2 camas de casal",
    bathrooms: 1,
    hasSuite: false,
    price: "294,40",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    images: [
      "/family-hotel-room-with-multiple-beds.jpg",
      "/family-hotel-room-with-multiple-beds-and-spacious-.jpg",
      "/family-hotel-room-bathroom-with-double-sinks.jpg"
    ],
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless",
      "Banheiro privado",
      "Telefone",
      "Apartamento para não Fumantes", 
      "Mini-Bar",
      "TV LCD com canais por assinatura"
    ],
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/62316?c=9354&q=1393&NRooms=1&CheckIn=12032026&CheckOut=13032026&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  }
}
