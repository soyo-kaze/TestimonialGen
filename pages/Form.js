import Head from "next/head";
import Image from "next/image";
import { InfoProvider } from "../components/dataContext";
import { useRouter } from "next/router";

const Form = () => {
  const [state, dispatch] = InfoProvider();
  const router = useRouter();
  const generate = (e) => {
    e.preventDefault();
    // const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    // let some;

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        let some = reader.result;
        const data = {
          name: e.target.name.value,
          image: some,
          degree: e.target.degree.value,
          course: e.target.course.value,
          skills: e.target.skills.value,
          date: e.target.date.value.slice(0, 4),
          interest: e.target.interests.value,
          title: e.target.title.value,
          subTitle: e.target.subtitle.value,
          shortDes: e.target.description.value,
        };
        dispatch({ type: "ADD_DATA", data: { ...data } });
        console.log(data);
        router.push("/Testimony");

        // preview.src = some;
        // console.log(some);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }

    // Todo:
    //  > Implement Onsubmit and give names and value to all the inputs
    //  > Also ref to that tweet: https://twitter.com/asidorenko_/status/1482679799374098433?s=20
    //  > For image reading https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
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
              <input type="text" required name="name" />
            </div>
            <div className="form__inputs">
              <label>
                Image{" "}
                <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                  ( Square in dimensions )
                </cite>
              </label>
              <input type="file" required name="image" />
            </div>
          </div>
          <div className="form__two">
            <div className="form__inputs">
              <label>Degree</label>
              <select id="Degree" required name="degree">
                <option value="Default" className="default" disabled selected>
                  -- Select --
                </option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.Sc">B.Sc</option>
              </select>
            </div>
            <div className="form__inputs">
              <label>Expected Graduation</label>
              <input type="date" required name="date" />
            </div>
          </div>
          <div className="form__inputs">
            <label>Course</label>
            <select name="course" id="Degree" required>
              <option value="Default" className="default" disabled selected>
                -- Select --
              </option>
              <option value="CSE">CSE</option>
              <option value="EE">EE</option>
              <option value="EC">EC</option>
              <option value="ME">ME</option>
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
              name="skills"
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
              name="interests"
            />
          </div>
          <div className="form__break">Shortlisting details</div>
          <div className="form__two">
            <div className="form__inputs">
              <label>Title</label>
              <input maxLength={20} type="text" required name="title" />
            </div>
            <div className="form__inputs">
              <label>
                Sub-Title{" "}
                <cite style={{ fontSize: "14px", fontWeight: "400" }}>
                  (Optional)
                </cite>
              </label>
              <input maxLength={20} type="text" name="subtitle" />
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
              name="description"
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
