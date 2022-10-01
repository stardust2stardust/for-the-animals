import MainHome from "./MainHome";
import MainEvents from "./MainEvents";
import MainNews from "./MainNews";
import MainLegislation from "./MainLegislation";
import MainHelp from "./MainHelp";

const Main = ({ navClick }) => {
  console.log("navClick from Main: ", navClick);

  if (navClick === "Events") {
    return (
      <main className="main-container">
        <MainEvents />
      </main>
    );
  }

  if (navClick === "News") {
    return (
      <main className="main-container">
        <MainNews />
      </main>
    );
  }

  if (navClick === "Legislation") {
    return (
      <main className="main-container">
        <MainLegislation />
      </main>
    );
  }

  if (navClick === "Help") {
    <main className="main-container">
      <MainHelp />
    </main>;
  }

  return (
    <main className="main-container">
      <MainHome />
    </main>
  );
};

export default Main;
