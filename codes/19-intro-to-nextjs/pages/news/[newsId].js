// nested paths created file or folder structure unders news
// our-domain/news/newsId

import { useRouter } from "next/router";

const DetailPage = () => {
  // Router run immediately when the page is loaded (first render)
  // and at this point it does not know the dynamic part of the path in URL
  const router = useRouter();

  const newsId = router.query.newsId; // this is the dynamic part of the path

  // Send a request to the backend API
  // to fetch the news item with newsId

  return <h1>Detail Page for "{newsId}"</h1>;
};

export default DetailPage;
