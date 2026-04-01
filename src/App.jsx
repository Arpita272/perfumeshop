import "./App.scss";
import { Link } from "react-router-dom";
import { useProducts } from "./useProducts";

export default function App() {
  const products=useProducts();
  
  return (
    <>
      <div className="body1">
        <div className="text">
          <p className="title1">NOMAD 13 EAU DE PARFUM</p>
          <p className="des">Discover the original fragrance</p>
          <Link to="/shop-all">
            <button>Shop now</button>
          </Link>
        </div>

        <div className="mainimage">
          <img src="/productimages/mainimage.avif" alt="main" />
        </div>
      </div>

      <div className="bestsellers">
        <h4>BEST SELLERS</h4>
        <div className="viewmore">
          <Link to="/shop-all" className="viewmore">
            <p>View More →</p>
          </Link>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div className="catalogue">
        <div className="catalogueimages">
          {products
            .filter((product) => product.bestseller)
            .map((product) => (
              <Link
                className="imgbox"
                key={product.product_id}
                to={`/product/${product.product_id}`}
              >
                <img src={product.image} alt={product.name} />
                <span className="label">Best Seller</span>
                <p className="desc">{product.product_name}</p>
                <p className="rate">£{product.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
