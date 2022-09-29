import { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories";
import MissionStatement from "./MissionStatement";
import SignUpForm from "./SignupForm";

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

  return (
    <main className="main-container">
      <Categories />
      <MissionStatement />
      <SignUpForm />

      {/* <div className="events-container section-container">
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
      </div> */}
    </main>
  );
};

export default Main;
