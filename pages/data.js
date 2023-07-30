const products = [
  {
    title: "Sony WH-1000XM4",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 349.99,
    reviews: 4,
  },
  {
    title: "Bose QuietC 35 II",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 299.99,
    reviews: 5,
  },
  {
    title: "Sennhe 3 Wireless",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 399.95,
    reviews: 3,
  },
  {
    title: "Jabra Elite 85h",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 249.99,
    reviews: 2,
  },
  {
    title: "Apple AirPods Pro",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 249.00,
    reviews: 4,
  },
  {
    title: "Beats Studio3",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 349.95,
    reviews: 4,
  },
  {
    title: "JBL Quantum 800",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 199.95,
    reviews: 4,
  },
  {
    title: "Audio-Tech ATH-M50",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 199.00,
    reviews: 5,
  },
  {
    title: "Beyer DT 770 Pro",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 179.00,
    reviews: 4,
  },
];



  

const images = [
    "headphones_a_1.webp",
    "headphones_a_2.webp",
    "headphones_a_3.webp",
    "headphones_a_4.webp",
    "headphones_b_1.webp",
    "headphones_b_2.webp",
    "headphones_b_3.webp",
    "headphones_b_4.webp",
    "headphones_c_1.webp"
]

const phoneColors = [
  { name: "Black", hex: "#000000" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Midnight Blue", hex: "#57798c" },
  { name: "Champagne Gold", hex: "#D4AF37" },
  // Add more colors here if needed
];




const productsWithImgs = products.map((item, index) => {
  return {
    ...item,
    image: `./images/${images[index]}`,
    colors: phoneColors.map((color) => color.hex),
    id: `product-${index}`,
  };
});


export default productsWithImgs