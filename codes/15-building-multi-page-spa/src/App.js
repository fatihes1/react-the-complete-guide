import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
//
// const router = createBrowserRouter(routeDefination);

// NOTE:
// If our path start with "/" then it is an absolute path.
// It means that it will be appended to the base path. Like after the domain name.
// If our path NOT start  with "/" then it is a relative path.
// Which means that, by default, it relative path add the currently active path

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "",
        // That means that this route is the default route for this parent route.
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
  // {
  //   path: "/admin",
  //   children: [
  //       ... define admin routes here
  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
