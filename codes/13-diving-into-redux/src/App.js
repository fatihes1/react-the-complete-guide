// import Counter from "./components/Counter";
import { useSelector } from "react-redux";

import CounterToolKit from "./components/CounterToolKit";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
// import CounterClassBased from "./components/CounterClassBased";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterToolKit />
    </Fragment>
    // <Counter />
    // <CounterClassBased />
  );
}

export default App;
