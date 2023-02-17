import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Book 1",
    price: 6,
  },
  {
    id: "p2",
    title: "Book 2",
    price: 5,
  },
  {
    id: "p3",
    title: "Book 3",
    price: 8,
  },
];
const ProductsPage = () => {
  return (
    <>
      <h1>Products Page !</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
