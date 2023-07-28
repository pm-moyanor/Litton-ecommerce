import productsWithImgs from "./data";
import styles from "../styles/Shop.module.css"
import Navbar from "../components/Navbar/Navbar";


export default function Shop() {
  return (
    <div>
      <Navbar/>
      {productsWithImgs.map((item) => {
        console.log(item.image);

        return (
          <div key={item.id} className={styles.container}>
            <img src={item.image} width={300} height={300} />
            <div className={styles.productInfo}>
              <h2 className={`${styles.productTitle}`}>{item.title}</h2>
              <p className={styles.productDescription}>{item.description}</p>
              <h4>{`$${item.price}`}</h4>
              <p>{`${item.reviews} stars`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
