export default function Product({title,price}){
  return  (
  <div style={{border: "1px solid white"}} className="product-container">
    <div className="product-images">
        <img alt="main-img"/>
        <div className= 'image-list_container'>secondary images</div>
    </div>
    <div className="product-info">
        <h1>{title}</h1>
        <h4>details</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ratione minima quisquam nisi in perferendis doloribus commodi laudantium illo vel! Et asperiores officia in est dicta laborum unde sint officiis!</p>
        <h3 className="product-info_price">{price}</h3>
        <div className="product-quantity_container">
<p>Quantity</p>
<div className="product-counter">
    <button>-</button>
    <p>1</p>
    <button>+</button>
</div>
        </div>
        <div className="product-buttons">
            <button>Add to cart</button>
            <button>Buy now</button>
        </div>
    </div>
  </div>
  )
}