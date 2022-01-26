import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>TestimonialGen</title>
        <link rel="shortcut icon" href="/assets/index.png"></link>
      </Head>
      <div className="hero__container">
        <div className="hero__text">
          <div className="hero__header">
            Create your own <br></br>
            <x className="testinomy">Testinomy</x>
          </div>
          <div className="hero__subhead">
            Dynamic Digital graphic testimony Generator{" "}
          </div>
          <div className="hero__btn">
            <Link href="/Form">
              <button> Create Now</button>
            </Link>
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
    </>
  );
}; 

export default Home;
