import Product from "../Product/Product";
import "./Products.css"

const Products = ({ list }) => (
  <section className="products">
    {list.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.description}
        image={product.image}
        rating={product.rating}
        rate={product.rate}
        count={product.count}
      />
    ))}
  </section>
);

export default Products;