import "./App.css";
import products from './data/products.json'

export default function App() {
  return (
    <>
      <div className="body1">
        <div className="text">
          <p className="title">NOMAD 13 EAU DE PARFUM</p>
          <p className="des">Discover the original fragrance</p>
          <button>Shop now</button>
        </div>

        <div className="mainimage">
          <img src="/productimages/mainimage.avif" alt="main" />
        </div>
      </div>

      <div className="bestsellers">
        <h4>BEST SELLERS</h4>
        <div className="viewmore">
          <p>View More</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="catalogue">
        <div className="catalogueimages">
      {products.categories.flatMap(category=>category.products).filter(product=>product.bestseller==="y").map(product=>(
        <div className="imgbox" key={product.id}>
            <img src={product.image} alt={product.name} />
            <span className="label">Best Seller</span>
            <p className="desc">{product.name}</p>
            <p className="rate">{product.price}</p>
          </div>
      ))}
        </div>
       </div>
    </>
  );
}