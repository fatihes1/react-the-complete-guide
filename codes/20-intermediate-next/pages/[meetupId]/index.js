// PATH: our-domain.com/[meetupId]

import MeetupDetail from "../../components/meetups/MeetupDetail";

// const DUMMY_DATA = {
//   id: "m1",
//   title: "This is a first meetup",
//   image:
//     "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
//   address: "Some address 5, 12345 Some City",
//   description: "This is a first meetup!",
// };

const MeetupDetailPage = (props) => {
  // console.log(props);
  const { meetupData } = props;
  return (
    <MeetupDetail
      title={meetupData.title}
      image={meetupData.image}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup according to meetupID

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "This is a first meetup",
        image:
          "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetailPage;
