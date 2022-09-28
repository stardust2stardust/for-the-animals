const MainSectionEvents = ({ event }) => {
  return (
    <div className="main-child-event">
      <h3>{event.title}</h3>
      <h4>{event.group}</h4>
      <p>
        {event.date} {event.time}
      </p>
    </div>
  );
};

export default MainSectionEvents;
