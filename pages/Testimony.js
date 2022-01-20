import { InfoProvider } from "../components/dataContext";
import { useState, useEffect } from "react";
import Link from "next/link";

const Testimony = () => {
  const [state, dispatch] = InfoProvider();
  const [isLoaded, setLoad] = useState(true);

  useEffect(() => {
    let canvas = document.querySelector("canvas");
    let cx = canvas.getContext("2d");
    let img = document.createElement("img");
    img.src = "/assets/PlacementRecord.jpg";
    if (state.data) {
      let downBtn = document.querySelector("#download");
      setLoad(false);
      let Dp = document.createElement("img");
      Dp.style.width = "50px";
      Dp.style.height = "50px";
      // Dp.style["object-fit"] = "cover";
      Dp.src = state.data.image;
      img.addEventListener("load", () => {
        cx.drawImage(img, 0, 0, canvas.width, canvas.height);
        cx.drawImage(Dp, 0, 43, 130, 126);
        cx.font = "28px Google Sans";
        cx.fillStyle = "#094a80";
        cx.fillText(state.data.name, 150, 113);
        cx.font = "12px Google Sans";
        cx.fillText(
          `${state.data.degree} - ${state.data.course} | Batch - ${state.data.date}`,
          150,
          133
        );
        cx.fillText(state.data.skills, 150, 195);
        cx.fillText(state.data.interest, 150, 253);
        cx.font = "18px Google Sans";
        cx.fillText(`${state.data.title} (${state.data.subTitle})`, 150, 311);
        cx.font = "11px Google Sans";
        cx.fillText(`${state.data.shortDes}`, 150, 327);
        downBtn.href = canvas.toDataURL();
        // link.src = canvas.toDataURL()
      });
    }
  }, [state]);

  const download = () => {};
  return (
    <div className="form__container" style={{ flexDirection: "column" }}>
      <canvas width="650" height="340"></canvas>
      {/* <img
        src={state.data ? state.data.image : "/assets/alt.png"}
        style={{ objectFit: "contain", height: "300px" }}
      /> */}
      {/* <p>{state.data ? state.data.name : "someText"}</p> */}
      <div className="testi__btns">
        <a id="download" download="template.jpg" href="" disabled={isLoaded}>
          <button disabled={isLoaded}>Download</button>
        </a>
        <a>
          <Link href="/Form">
            <button>Generate another</button>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Testimony;
