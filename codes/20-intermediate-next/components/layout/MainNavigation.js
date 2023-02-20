import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <div
        className={classes.logo}
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
      >
        Next Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
