import axios from "axios";
import { useState, useEffect } from "react";
import MainSectionEvents from "./MainSectionEvents";

const MainEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/events").then((response) => {
      console.log("promise fulfilled");
      setEvents(response.data);
    });
  }, []);
  console.log("render", events.length, "events");

  return (
    <>
      <div className="events-container">
        <h2 className="">Events</h2>
        <div className="events-list">
          {events.map((event) => (
            <MainSectionEvents
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
