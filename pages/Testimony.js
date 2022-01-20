import { InfoProvider } from "../components/dataContext";
import { useState, useEffect } from "react";
import Link  from "next/link";

const Testimony = () => {
  const [state, dispatch] = InfoProvider();
  const [isLoaded, setLoad] = useState(true);

  useEffect(() => {
    let downBtn = document.querySelector("#download");
    downBtn.href = state.data ? state.data.image : "/assets/alt.png";
    setLoad(false);
  }, [state]);

  const download = () => {};
  return (
    <div
      className="form__container"
      style={{ height: "70vh", flexDirection: "column" }}
    >
      <img
        src={state.data ? state.data.image : "/assets/alt.png"}
        style={{ objectFit: "contain", height: "300px" }}
      />
      {/* <p>{state.data ? state.data.name : "someText"}</p> */}
      <div className="testi__btns">
        <a id="download" download="template.jpg" href="" disabled={isLoaded}>
          <button disabled={isLoaded}>Download</button>
        </a>
        <Link href="/Form">
          <button>Generate another</button>
        </Link>
      </div>
    </div>
  );
};

export default Testimony;
