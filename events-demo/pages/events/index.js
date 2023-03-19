import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function EventListPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventListPage;
