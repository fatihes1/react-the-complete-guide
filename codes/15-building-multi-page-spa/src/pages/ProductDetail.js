import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  const productId = params.productId;

  return (
    <>
      <h1>Product specific data for "{productId}"!</h1>
      <button>
        {/*The relative attr is 'route' by default. So we can omit it.*/}
        {/*When it is 'route' then the link will be relative to the current route.*/}
        {/*According to routes we defined in App.js, the current route is '/products'.*/}
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </>
  );
};

export default ProductDetailPage;
