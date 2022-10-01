const SecondaryNav = ({ navClick }) => {
  return (
    <ul className="nav-secondary">
      <li
        onClick={navClick}
        className="nav-item nav-events"
      >
        Events
      </li>
      <li
        onClick={navClick}
        className="nav-item nav-news"
      >
        News
      </li>
      <li
        onClick={navClick}
        className="nav-item nav-legislation"
      >
        Legislation
      </li>
      <li
        onClick={navClick}
        className="nav-item nav-help"
      >
        Help Out
      </li>
    </ul>
  );
};

export default SecondaryNav;
