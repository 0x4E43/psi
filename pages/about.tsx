import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Image from "next/image";
import HeroImage from "../public/assets/hero.jpg";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="flex flex-1 overflow-hidden sticky">
        <br />
        <aside className="flex flex-col w-64 mt-10 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l   text-gray-900">
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <a
                  className="flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-200"
                  href="#aboutUs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium text-gray-900 hover:text-gray-200">
                    Who Are We
                  </span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-200"
                  href="#why"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium text-gray-900 hover:text-gray-200">
                    Why to Choose Us
                  </span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-200"
                  href="#values"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium text-gray-900 hover:text-gray-200">
                    Core Values
                  </span>
                </a>

                <a
                  className="flex items-center px-3 py-2 text-gray-900 transition-colors duration-300 transform rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-200"
                  href="#mission"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-medium text-gray-900 hover:text-gray-200">
                    Mission and Vision
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
        <div className="flex flex-1 mt-24 mx-10">
          <div className="container">
            <div id="aboutUs">
              <a
                href="#"
                className="flex flex-row items-center rounded-lg shadow md:flex-row hover:bg-gray-100 "
              >
                <Image
                  className="object-cover rounded-t-lg h-96 md:h-auto w-96 md:rounded-none md:rounded-l-lg"
                  src={HeroImage}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Who are we?
                  </h5>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    Psiknowlogix is a one-stop solution center for all the
                    Financial, Regulatory and Compliance processes. We are a
                    growing KPO having over seven years of experience in
                    Disclosure, Regulatory Filings, XBRL Solutions and other
                    Finance & Accounts related processes. Our extremely
                    experienced and highly professional team uses the most
                    current approach and technologies available. We work for
                    both domestic and foreign clients in processes like
                    Financial Reporting, Accounting and related ones, thereby
                    saving your TIME and MONEY, so that you focus on your core
                    areas. We are transparent in our approach and provide
                    end-to-end Financial Solutions keeping the expectations and
                    deadline in our mind. We want our clients to be satisfied
                    and we work diligently towards that.
                  </p>
                </div>
              </a>
            </div>
            <div className="mt-10" id="why">
              <a
                href="#"
                className="flex flex-col items-center rounded-lg shadow md:flex-row hover:bg-gray-100 "
              >
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Why to choose us?
                  </h5>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    Psiknowlogix Consulting values its relationships with
                    managers, customers, vendors, business partners, and
                    co-workers. Strong, positive relationships that are open and
                    honest form a big part our entire ecosystem and that
                    differentiates our Business System Solutions from the rest
                    of others. An efficient KPO helps you meet all your
                    Financial, Regulatory and Compliance requirements and
                    ensures that your company concentrates on core areas. Our
                    team consists of qualified and experienced CPA, CA, CMA and
                    MBA, thereby ensuring that your projects are done by
                    experts. We at Psiknowlogix can be your one-stop partner,
                    developing and sustaining professional relationship by
                    providing Financial, Regulatory and Compliance Solutions,
                    and we ensure you the best outcome. At Psiknowlogix, we
                    deeply care for your expenses and that is why we have the
                    most competitive rates in industry. We look forward to
                    working with you and exceeding your expectations.
                  </p>
                </div>
                <Image
                  className="object-cover rounded-t-lg h-96 md:h-auto w-96 md:rounded-none md:rounded-l-lg"
                  src={HeroImage}
                  alt=""
                />
              </a>
            </div>
            <div className="mt-10" id="values">
              <a
                href="#"
                className="flex flex-col items-center rounded-lg shadow md:flex-row hover:bg-gray-100 "
              >
                <Image
                  className="object-cover rounded-t-lg h-96 md:h-auto w-96 md:rounded-none md:rounded-l-lg"
                  src={HeroImage}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Our core values
                  </h5>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    <ol className="m-2">
                      <li className="m-2">
                        1. <b>Teamwork</b>: To work together with no barriers
                        among different hierarchies and integrate inter and
                        intra project functions to deliver the best solutions
                        for all our clients.
                      </li>
                      <li className="m-2">
                        2. <b>Integrity</b>: To act truthfully or accurately,
                        and doing what is right even when it is difficult and no
                        one is watching.
                      </li>
                      <li className="m-2">
                        3. <b>Passion</b>: Passion is the fuel for purpose and
                        keeps us positively engaged to fulfill our vision.
                      </li>
                      <li className="m-2">
                        4. <b>Ownership</b>: Holding us accountable for our
                        actions and how we best serve our clients and accepting
                        responsibility for our actions
                      </li>
                      <li className="m-2">
                        5. <b>Respect</b>: To show regard and appreciation for
                        everyone, mean honor and esteem that includes respect
                        for self, respect for the rights and dignity of
                        everyone.
                      </li>
                    </ol>
                  </p>
                </div>
              </a>
            </div>
            <div className="mt-10" id="mission">
              <a
                href="#"
                className="flex flex-col items-center rounded-lg shadow md:flex-row hover:bg-gray-100 "
              >
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Our Mission and Vision
                  </h5>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    Psiknowlogix serves to enhance the quality of Outsourced
                    Financial Processes by providing highly competitive and
                    optimum quality services. We aim to be the best KPO
                    providing most Economical Solutions, thereby achieving
                    client’s satisfaction and trust.
                  </p>
                </div>

                <Image
                  className="object-cover rounded-t-lg h-96 md:h-auto w-96 md:rounded-none md:rounded-l-lg"
                  src={HeroImage}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
