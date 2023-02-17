import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>Page Not Found!</h1>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
