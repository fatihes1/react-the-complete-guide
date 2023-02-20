// The index.js file will be our root page. It will be the first page that is loaded when we visit our site.
// So if a request reaches our domain slash nothing, then just index.js will be loaded.

// Path: our-domain.com/
const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;
