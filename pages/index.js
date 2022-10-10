import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title> TestimonialGen </title>
        <link rel="shortcut icon" href="/assets/index.png"></link>
      </Head>
      <div className="hero__container">
        <div className="hero__text">
          <div className="hero__header">
            Create your own <br> </br> <x className="testinomy"> Testinomy </x>
          </div>
          <div className="hero__subhead">
            Dynamic Digital graphic testimony Generator
          </div>
          <div className="hero__btn">
            <Link href="/Form">
              <button> Create Now </button>
            </Link>
          </div>
        </div>
        <div className="hero__imgContainer">
          <iframe
            className="hero__img"
            src="https://my.spline.design/untitled-40e6b19287e092ff31053cbd744ae16d/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
