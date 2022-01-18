import Image from "next/image";

const Home = () => {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <div className="hero__header">
          Create your own <br></br>
          <x className="testinomy">Testinomy</x>
        </div>
        <div className="hero__subhead">
          Dynamic Digital graphic testimony Generator{" "}
        </div>
      </div>
      <div className="hero__imgContainer">
        <Image
          src="/assets/hero.png"
          width="1000"
          height="500"
          className="hero__img"
        />
      </div>
    </div>
  );
};

export default Home;
