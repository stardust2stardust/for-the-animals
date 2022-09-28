import { useState, useEffect } from "react";
import MainSectionEvents from "./MainSectionEvents";
import axios from "axios";
import image1 from "../images/guillermo-latorre-ZwtsGgJxpXA-unsplash.jpg";

const Main = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/events").then((response) => {
      console.log("promise fulfilled");
      setEvents(response.data);
    });
  }, []);
  console.log("render", events.length, "events");
  // axios.get("http://localhost:3001/events").then((response) => {
  //   const events = response.data;
  //   console.log(events);
  // });

  return (
    <main className="main-container">
      <img
        className="square-image"
        src={image1}
        alt="img"
      />

      <div className="events-container section-container">
        <h2 className="main-section-title">Events</h2>
        <div className="main-grid">
          {events.map((event) => (
            <MainSectionEvents
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
      <div className="news-container section-container">
        <h2 className="main-section-title">News</h2>
        <div className="main-grid">
          {events.map((event) => (
            <MainSectionEvents
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
