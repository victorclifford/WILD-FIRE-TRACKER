import spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading" />
      <h4>Fetching Data From NASA...</h4>
    </div>
  );
};

export default Loader;
