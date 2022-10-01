import MainHome from "./MainHome";
import MainEvents from "./MainEvents";

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
        <h2>News Section</h2>
      </main>
    );
  }

  if (navClick === "Legislation") {
    return (
      <main className="main-container">
        <h2>Legislation</h2>
      </main>
    );
  }

  if (navClick === "Help") {
    <main className="main-container">
      <h2>Looking to Help Out?</h2>
    </main>;
  }

  return (
    <main className="main-container">
      <MainHome />
    </main>
  );
};

export default Main;
