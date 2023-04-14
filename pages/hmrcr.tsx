import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Image from "next/image";
import HeroImage from "../public/assets/hero.jpg";

export default function Hmrcr() {
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
                    SEC Filing & Reporting
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
                    Statutory Compliance Reports
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
                    Mutual Fund Reporting
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
                    SEDAR Reporting
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
                    HMRC Reporting
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
        <div className="flex flex-1 mt-24 mx-10">
          <div className="container">
            <div className="mt-10" id="why">
              <a
                href="#"
                className="flex flex-col items-center rounded-lg shadow md:flex-row hover:bg-gray-100 "
              >
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    HMRC Reporting
                  </h5>
                  <h3>HMRC Corporation Tax filing in iXBRL</h3>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    PsiKnowLogix provides a complete range of validation, review
                    and tagging applications to speed up the completion of
                    Inline XBRL (iXBRL) filings and to provide assurance audit
                    trail. Tools such as Seahorse® that simplify the tagging of
                    accounts documents are becoming essential now that HMRC’s
                    minimum tagging arrangements are being abolished with the
                    introduction of the new FRS 101 and 102 taxonomies.
                  </p>
                  <h3>Revenue filing in iXBRL</h3>
                  <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    Revenue is now in Phase 2 of its iXBRL Corporation Tax
                    filing programme, under which companies in the Large Case
                    Division and, since October 2014, those in the Non Large
                    Case Division must submit their financial statements in
                    iXBRL format via the Revenue Online Service. Currently, the
                    reports are prepared in conformance with the Irish GAAP
                    taxonomy, but new taxonomies based on IFRS will shortly be
                    introduced.
                  </p>
                </div>
                <Image
                  className="object-cover rounded-t-lg md:h-auto w-96 md:rounded-none md:rounded-l-lg"
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
