import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  // React router check if a promise returned from loader function
  // If yes, it will wait for the promise to resolve automatically
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// This code that's defined in the loader, executes in the browser, not on server !
// We can access local resources, like the browser's local storage, or the browser's cookies

// BUT we can not use React hooks like useState, useEffect, useContext, etc.
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events !" };
    // .....
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch events !" }),
    //   {
    //     status: 500,
    //   }
    // );
    return json({ message: "Could not fetch events !" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response("any data", { status: 200 });
    // return res;

    return response;
  }
};
