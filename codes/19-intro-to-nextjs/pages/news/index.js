// The file name will be used as a path name.
// So index.js the content in here, the react component in here, would be served for request to our domain slash news.

// Path: our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">Nextjs is great</Link>
        </li>
        <li>
          <Link href="/news/nextjs-is-great-or-not">
            Nextjs is great or not
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
