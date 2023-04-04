import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/EventList';
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next.js Events</title>
        <meta name="description" content="find a lot of great events" />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
