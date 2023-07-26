const products = [
    {
      title: "Sony WH-1000XM4",
      description: "Experience industry-leading noise cancellation with the Sony WH-1000XM4 headphones. These headphones feature Sony's HD Noise Cancelling Processor QN1, which blocks out more background noise than ever before. The headphones also have Dual Noise Sensor technology that captures ambient noise and passes the data to the processor for more accurate cancellation. The 40mm drivers with Liquid Crystal Polymer (LCP) diaphragms provide excellent sound quality, while the 30-hour battery life ensures you can listen all day long. With Alexa built-in and touch controls, the WH-1000XM4 headphones are the perfect choice for audiophiles who demand the best.",
      price: 349.99,
      reviews: 4
    },
    {
      title: "Bose QuietComfort 35 II",
      description: "Enjoy immersive sound with the Bose QuietComfort 35 II headphones. These wireless headphones use Bose's renowned noise-cancellation technology to block out distracting sounds, and the built-in Google Assistant and Amazon Alexa make it easy to control your music and get answers to your questions. The headphones also have a noise-rejecting dual-microphone system that provides clear calls and voice activation, even in windy or noisy environments. With a 20-hour battery life and comfortable design, the QuietComfort 35 II headphones are the perfect choice for music lovers on the go.",
      price: 299.99,
      reviews: 5
    },
    {
      title: "Sennheiser Momentum 3 Wireless",
      description: "Experience superior sound quality and advanced noise-cancellation with the Sennheiser Momentum 3 Wireless headphones. These headphones feature Sennheiser's NoiseGard technology, which blocks out background noise and lets you focus on your music. The Momentum 3 headphones also have intuitive touch controls and smart assistants like Alexa and Google Assistant built-in, so you can easily control your music and get answers to your questions. With a sleek design and premium materials, the Momentum 3 headphones are the perfect choice for discerning audiophiles.",
      price: 399.95,
      reviews: 3
    },
    {
      title: "Jabra Elite 85h",
      description: "The Jabra Elite 85h headphones are the ultimate choice for people who demand the best in audio quality and noise-cancellation. These headphones feature SmartSound technology, which uses artificial intelligence to analyze your environment and automatically adjust the audio settings to provide the best listening experience. The Elite 85h headphones also have a long battery life, durable design, and excellent noise-cancellation, making them perfect for commuters, travelers, and anyone who wants to enjoy their music in peace.",
      price: 249.99,
      reviews: 2
    },
    {
      title: "Apple AirPods Pro",
      description: "Experience the future of wireless audio with the Apple AirPods Pro. These earbuds feature active noise-cancellation technology that blocks out external noise, and the transparency mode lets you hear what's happening around you when you need to. The AirPods Pro also have sweat and water resistance, making them perfect for workouts or outdoor activities. With a 24-hour battery life and easy-to-use controls, the AirPods Pro are the perfect choice for Apple users who demand the best.",
      price: 249.00,
      reviews: 4
    },
    {
        title: "Beats Studio3 Wireless",
        description: "Experience premium sound quality with the Beats Studio3 Wireless headphones. These headphones feature Pure Adaptive Noise Cancelling technology that blocks out external noise and adjusts the sound to your surroundings for the best listening experience. The headphones also have a long battery life and fast charging capabilities, so you can listen all day long. With comfortable ear cushions and a sleek design, the Studio3 Wireless headphones are the perfect choice for style-conscious music lovers.",
        price: 349.95,
        reviews: 4
      },
      {
        title: "JBL Quantum 800",
        description: "Enjoy immersive audio with the JBL Quantum 800 headphones. These headphones feature JBL QuantumSOUND Signature technology, which provides a realistic audio experience with deep bass and clear highs. The headphones also have Active Noise Cancelling and a lightweight, comfortable design, making them perfect for gaming, listening to music, or taking calls. With a 14-hour battery life and easy-to-use controls, the Quantum 800 headphones are the perfect choice for anyone who demands high-quality audio.",
        price: 199.95,
        reviews: 4
      },
      {
        title: "Audio-Technica ATH-M50xBT",
        description: "Experience professional-grade audio with the Audio-Technica ATH-M50xBT headphones. These headphones feature large-aperture drivers and sound-isolating earcups that provide accurate audio reproduction and excellent noise isolation. The headphones also have a long battery life and touch controls for easy operation. With a comfortable design and Bluetooth connectivity, the ATH-M50xBT headphones are the perfect choice for audiophiles who demand the best.",
        price: 199.00,
        reviews: 5
      },
      {
        title: "Beyerdynamic DT 770 Pro",
        description: "Experience studio-quality sound with the Beyerdynamic DT 770 Pro headphones. These headphones feature a closed-back design and soft ear pads that provide excellent noise isolation and comfort for extended listening sessions. The headphones also have a durable design and a single-sided cable that won't tangle. With exceptional sound quality and a reputation for reliability, the DT 770 Pro headphones are the perfect choice for music producers, sound engineers, and audiophiles.",
        price: 179.00,
        reviews: 4
      }
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

const productsWithImgs = products.map((item,index)=>{
    return{
        ...item,
        image : `./images/${images[index]}`,
        id : `product-${index}`

    }
})

export default productsWithImgs