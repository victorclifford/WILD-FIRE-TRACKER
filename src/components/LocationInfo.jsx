const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <b>{info.id} </b>
        </li>
        <li>
          TITLE: <b>{info.title} </b>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
