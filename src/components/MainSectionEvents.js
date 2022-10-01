const MainSectionEvents = ({ event }) => {
  return (
    <div className="events-item">
      <div className="events-item-text">
        <h3>{event.title}</h3>
        <h4>{event.group}</h4>
        <p>
          {event.date} {event.time}
        </p>
      </div>
      <div className="events-item-image">image or logo</div>
    </div>
  );
};

export default MainSectionEvents;
