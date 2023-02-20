// PATH: our-domain.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
