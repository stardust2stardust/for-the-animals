const MainSectionEvents = ({ event }) => {
  return (
    <div className="main-child-box">
      <div className="main-child-text">
        <h3>{event.title}</h3>
        <h4>{event.group}</h4>
        <p>
          {event.date} {event.time}
        </p>
      </div>
      <div className="main-child-img">image or logo</div>
    </div>
  );
};

export default MainSectionEvents;
