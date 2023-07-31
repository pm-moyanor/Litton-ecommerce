const products = [
  {
    title: "Sony WH-1000XM4",
    id: "PR001",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 349.99,
    reviews: 4,
    image: "./images/headphones_a_1.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: false },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: false },
    ],
    inStock: true,
  },
  {
    title: "Bose QuietC 35 II",
    id: "PR002",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 299.99,
    reviews: 5,
    image: "./images/headphones_a_2.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: false },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: false },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: false,
  },
  {
    title: "Sennhe 3 Wireless",
    id: "PR003",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 399.95,
    reviews: 3,
    image: "./images/headphones_a_3.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: false },
      { name: "Midnight Blue", hex: "#57798c", inStock: false },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Jabra Elite 85h",
    id: "PR004",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 249.99,
    reviews: 2,
    image: "./images/headphones_a_4.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: false },
    ],
    inStock: false,
  },
  {
    title: "Apple AirPods Pro",
    id: "PR005",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 249.00,
    reviews: 4,
    image: "./images/headphones_b_1.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: false },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: false },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Beats Studio3",
    id: "PR006",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 349.95,
    reviews: 4,
    image: "./images/headphones_b_2.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: false },
      { name: "Midnight Blue", hex: "#57798c", inStock: false },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: false,
  },
  {
    title: "JBL Quantum 800",
    id: "PR007",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 199.95,
    reviews: 4,
    image: "./images/headphones_b_3.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: false },
    ],
    inStock: true,
  },
  {
    title: "Audio-Tech ATH-M50",
    id: "PR008",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 199.00,
    reviews: 5,
    image: "./images/headphones_b_4.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: false },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: false },
      { name: "Midnight Blue", hex: "#57798c", inStock: false },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: false,
  },
  {
    title: "Beyer DT 770 Pro",
    id: "PR009",
    description:
      "Flexible, secure-fit wingtips\nActive Noise Cancelling (ANC) and Transparency mode\nUp to 6 hours of listening time3; 24 hours with charging case4\nAuto Play/Pause connection via Apple H1 chip",
    price: 179.00,
    reviews: 4,
    image: "./images/headphones_c_1.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: true,
  },
];

export default products;
