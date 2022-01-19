import { InfoProvider } from "../components/dataContext";

const Testimony = () => {
  const [state, dispatch] = InfoProvider();
  return (
    <div className="form__container">
      <img
        src={state.data.image ? state.data.image : ""}
        style={{ objectFit: "contain", height: "500px" }}
      />
      <p>{state.data.name}</p>
    </div>
  );
};

export default Testimony;