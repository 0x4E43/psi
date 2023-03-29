import HeroImage from "../public/assets/hero.jpg";



import NavBar from "./navbar";

export default function Hero() {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url("${HeroImage.src}")`,
          height: "75vh",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-10 text-5xl font-bold text-white">
              You asked, We delivered.
            </h1>
            <p className="mb-5 text-slate-200">
            We can help you go where you want to grow in your business.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* Notice */}

      <div className="relative flex overflow-x-hidden p-2 bg-slate-800 text-primary">
        <div className="py-5 animate-marquee whitespace-nowrap indicator">
          {/* <span className="indicator-item badge badge-primary">new</span>  */}
          <span className="text-2xl mx-4">
            🆕 Your News Items will Appears Here. This is a demo marque banner.
            📰
          </span>
          <span className="text-2xl mx-4">
            🆕 Your News Items will Appears Here. This is a demo marque banner.
            📰
          </span>
          <span className="text-2xl mx-4">
            🆕 Your News Items will Appears Here. This is a demo marque banner.
            📰
          </span>
          {/* <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span> */}
        </div>

        {/* <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div> */}
      </div>
    </>
  );
}
