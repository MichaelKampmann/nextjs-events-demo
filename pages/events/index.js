import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
import { Fragment } from 'react';

function EventListPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventListPage;
