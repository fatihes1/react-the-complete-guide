import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // We should NOT create a button and then navigate programmatically. Simple use <Link> instead.
  const navigateHandler = () => {
    setTimeout(() => {
      navigate("/products");
    }, 1000);
  };

  return (
    <>
      <h1>Home Page is here!</h1>
      <p>
        Go to <Link to="/products">Products Page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
