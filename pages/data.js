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
    price: 249.0,
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
    price: 199.0,
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
    price: 179.0,
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


const earphoneProducts = [
  {
    title: "Beyer DT 770 Pro",
    id: "PR009",
    description:
      "Flexible, secure-fit earphones with noise cancellation and great sound quality.",
    price: 179.0,
    reviews: 4,
    image: "./images/earphones_a_1.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Rose Gold", hex: "#B76E79", inStock: true },
      { name: "Midnight Blue", hex: "#57798c", inStock: true },
      { name: "Champagne Gold", hex: "#D4AF37", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Sony WF-1000XM4",
    id: "PR010",
    description:
      "True wireless earbuds with advanced noise cancellation technology.",
    price: 249.99,
    reviews: 5,
    image: "./images/earphones_a_2.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Silver", hex: "#C0C0C0", inStock: true },
      { name: "Gold", hex: "#FFD700", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Beats Studio Buds",
    id: "PR011",
    description:
      "Stylish and compact earbuds with powerful sound and comfortable fit.",
    price: 159.95,
    reviews: 4,
    image: "./images/earphones_a_3.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "White", hex: "#FFFFFF", inStock: true },
      { name: "Red", hex: "#FF0000", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "AirPods Pro",
    id: "PR012",
    description:
      "Premium earbuds with active noise cancellation and seamless integration with Apple devices.",
    price: 249.0,
    reviews: 4,
    image: "./images/earphones_b_1.webp",
    colors: [{ name: "White", hex: "#FFFFFF", inStock: true }],
    inStock: true,
  },
  {
    title: "Sennheiser Momentum True Wireless 2",
    id: "PR013",
    description:
      "High-quality earbuds with exceptional sound clarity and long battery life.",
    price: 299.95,
    reviews: 5,
    image: "./images/earphones_b_2.webp",
    colors: [{ name: "Black", hex: "#000000", inStock: true }],
    inStock: true,
  },
  {
    title: "Jabra Elite 75t",
    id: "PR014",
    description:
      "Compact and comfortable earbuds with strong bass and customizable sound.",
    price: 179.99,
    reviews: 4,
    image: "./images/earphones_b_3.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Titanium Black", hex: "#36393F", inStock: true },
      { name: "Gold Beige", hex: "#C3A489", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Anker SoundCore Liberty Air 2 Pro",
    id: "PR015",
    description:
      "Affordable earbuds with impressive sound quality and customizable EQ.",
    price: 129.99,
    reviews: 4,
    image: "./images/earphones_b_4.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "White", hex: "#FFFFFF", inStock: true },
      { name: "Pink", hex: "#FF69B4", inStock: true },
      { name: "Blue", hex: "#1E90FF", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Samsung Galaxy Buds Pro",
    id: "PR016",
    description:
      "Feature-packed earbuds with active noise cancellation and water resistance.",
    price: 199.99,
    reviews: 5,
    image: "./images/earphones_c_1.webp",
    colors: [
      { name: "Phantom Black", hex: "#000000", inStock: true },
      { name: "Phantom Silver", hex: "#C0C0C0", inStock: true },
      { name: "Phantom Violet", hex: "#6C448A", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "JBL Free X",
    id: "PR017",
    description: "True wireless earbuds with strong bass and comfortable fit.",
    price: 99.95,
    reviews: 4,
    image: "./images/earphones_c_2.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "White", hex: "#FFFFFF", inStock: true },
      { name: "Blue", hex: "#1E90FF", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "1MORE Stylish True Wireless Earbuds",
    id: "PR018",
    description: "Sleek and comfortable earbuds with enhanced sound quality.",
    price: 79.99,
    reviews: 4,
    image: "./images/earphones_c_3.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Gold", hex: "#FFD700", inStock: true },
      { name: "Pink", hex: "#FF69B4", inStock: true },
      { name: "Green", hex: "#008000", inStock: true },
    ],
    inStock: true,
  },
  {
    title: "Skullcandy Indy Evo",
    id: "PR019",
    description:
      "Sporty and rugged earbuds with long battery life and water resistance.",
    price: 59.99,
    reviews: 3,
    image: "./images/earphones_c_4.webp",
    colors: [
      { name: "Black", hex: "#000000", inStock: true },
      { name: "Gray", hex: "#808080", inStock: true },
      { name: "Blue", hex: "#1E90FF", inStock: true },
      { name: "Green", hex: "#008000", inStock: true },
    ],
    inStock: true,
  },
];

export default products;
export { earphoneProducts };
