import NavTop from "./navtop";

export default function NavBar() {
  return (
    <>
    <NavTop/>
      <div className="navbar bg-base-100 absolute z-10 bg-slate-400 text-slate-800">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold hover:animate-bounce hover:bg-primary hover:text-white">PsiKnowLogix</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 text-white bg-slate-600">
                <li>
                  <div className="dropdown dropdown-right dropdown-hover hover:bg-primary ">
                    <label tabIndex={0}>
                      Financial & Accounting <span className="text-2xl text-white"> &#8594;</span>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 bg-slate-800"
                    >
                      <li>
                        <a className="hover:bg-primary">Book Keeping Service</a>
                      </li>
                      <li>
                        <a className="hover:bg-primary">Accounts Payble Service</a>
                      </li>
                      <li>
                        <a className="hover:bg-primary">Accounts Recivable Service</a>
                      </li>
                      <li>
                        <a className="hover:bg-primary">Payroll Processing Service</a>
                      </li>
                      <li>
                        <a className="hover:bg-primary">Tax Preparation Service</a>
                      </li>
                      <li>
                        <a className="hover:bg-primary">Global Accounting</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="hover:bg-primary">SEC Filings & Reporting</a>
                </li>
                <li>
                  <a className="hover:bg-primary">Statutory Compliance Reports</a>
                </li>
                <li>
                  <a className="hover:bg-primary">Mutual Funds Reporting</a>
                </li>
                <li>
                  <a className="hover:bg-primary">SEDAR Reporting</a>
                </li>
                <li>
                  <a className="hover:bg-primary">HMRC Reporting</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Chat With Us</a> */}
        </div>
      </div>
    </>
  );
}
