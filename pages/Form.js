import Head from "next/head";

const Form = () => {
  const generate = (e) => {
    e.preventDefault();
    console.log("Done");

    // Todo:
    //  > Implement Onsubmit and give names and value to all the inputs
    //  > Also ref to that tweet: https://twitter.com/asidorenko_/status/1482679799374098433?s=20
  };
  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <div className="form__container">
        <form className="form" onSubmit={generate}>
          <div className="form__break">Personal details</div>
          <div className="form__two">
            <div className="form__inputs">
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className="form__inputs">
              <label>
                Image{" "}
                <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                  ( Square in dimensions )
                </cite>
              </label>
              <input type="file" required />
            </div>
          </div>
          <div className="form__two">
            <div className="form__inputs">
              <label>Degree</label>
              <select name="Degree" id="Degree" required>
                <option value="Default" className="default" disabled selected>
                  -- Select --
                </option>
                <option value="volvo">B.Tech</option>
                <option value="saab">B.Sc</option>
              </select>
            </div>
            <div className="form__inputs">
              <label>Expected Graduation</label>
              <input type="date" required />
            </div>
          </div>
          <div className="form__inputs">
            <label>Course</label>
            <select name="Degree" id="Degree" required>
              <option value="Default" className="default" disabled selected>
                -- Select --
              </option>
              <option value="volvo">CSE</option>
              <option value="saab">EE</option>
              <option value="saab">EC</option>
              <option value="saab">ME</option>
            </select>
          </div>
          <div className="form__inputs">
            <label>
              Skills{" "}
              <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                (60 letter limit)
              </cite>
            </label>
            <input
              maxLength={60}
              type="text"
              style={{ width: "60%" }}
              required
            />
          </div>
          <div className="form__inputs">
            <label>
              Interests{" "}
              <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                (60 letter limit)
              </cite>
            </label>
            <input
              maxLength={60}
              type="text"
              style={{ width: "60%" }}
              required
            />
          </div>
          <div className="form__break">Shortlisting details</div>
          <div className="form__two">
            <div className="form__inputs">
              <label>Title</label>
              <input maxLength={20} type="text" required />
            </div>
            <div className="form__inputs">
              <label>
                Sub-Title{" "}
                <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                  (Optional)
                </cite>
              </label>
              <input maxLength={20} type="text" />
            </div>
          </div>
          <div className="form__inputs">
            <label>
              Short Description
              <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                (60 letter limit)
              </cite>
            </label>
            <input
              maxLength={60}
              type="text"
              style={{ width: "60%" }}
              required
            />
          </div>
          <div
            className="form__break"
            style={{
              textDecoration: "none",
              marginBottom: 0,
              marginTop: "30px",
            }}
          >
            <button type="submit">Generate</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
