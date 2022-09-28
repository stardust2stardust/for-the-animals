import { useState, useEffect } from "react";
import MainSection from "./MainSection";
import axios from "axios";

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
    <main>
      <MainSection />
      <MainSection />
      <MainSection />
      <MainSection />
    </main>
  );
};

export default Main;
