import Image from "next/image";
import HeroImage from "../public/assets/hero.jpg";
import MoneyImage from "../public/assets/money.jpg";
import TimeImage from "../public/assets/time.png";
import ExpertImage from "../public/assets/expert.png";
export default function Features() {
  return (
    <>
      <div className="bg-slate-100">
        <h1 className="text-3xl text-primary font-bold text-center underline mt-5">
          Why Us <span className="animate-pulse">?</span>
        </h1>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help achieve extraordinary business outcomes with our
            process-driven services encompassing Strategy & Consulting Services
          </p>
        </div>
        <div className="flex w-full p-5">
          <div className="grid h-500 flex-grow card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 m-3">
            <figure className="px-10 pt-10">
              <Image src={TimeImage} alt={"Image"} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Saving your Time</h2>
              <p>We guarantee to save a minimum of 20 hours of project lifetime as compared to other ones.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div className="grid h-500 flex-grow card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 m-3" >
            <figure className="px-10 pt-10">
              <Image src={MoneyImage} alt={"Image"} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Saving Your Money</h2>
              <p>Your work remains continuous even when you are closed. We guarantee you saving a minimum of 55% against your current expenses for your projects.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div className="grid h-500 flex-grow card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 m-3">
            <figure className="px-10 pt-10">
              <Image src={ExpertImage} alt={"Image"} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Expert Service</h2>
              <p>
              Psiknowlogix offers complete Financial, Regulatory and Compliance services for clients. We let you save hundreds of man hours and thousands of dollars each Fiscal Year.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
