import React from "react";

const DefaultFooter = () => {
  return (
    <footer className="bg-[#f4fff4] px-[20px] md:px-[34px] shadow-lg ">
      <div className="container flex flex-col gap-[11px] md:flex-row justify-between md:items-center px-6 pt-[20px] pb-[6px] mx-auto">
        <div className="text-[#2d2d2d] font-medium text-[16px]">
          <h1>Get connected with us on social networks!</h1>
        </div>
        <div className="flex items-center gap-[27px]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6526 3.80859H43.3995L28.6594 20.6556L46 43.5805H32.4225L21.7881 29.6767L9.61989 43.5805H2.86886L18.6349 25.5608L2 3.80859H15.9222L25.5348 16.5173L36.6526 3.80859ZM34.2846 39.5422H38.0232L13.8908 7.63486H9.87892L34.2846 39.5422Z"
              fill="black"
            />
          </svg>
          <svg
            width="19"
            height="19"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_210_6135)">
              <path
                d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                fill="#000100"
              />
              <path
                d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                fill="#000100"
              />
              <path
                d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z"
                fill="#000100"
              />
            </g>
            <defs>
              <clipPath id="clip0_210_6135">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="19"
            height="19"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_210_6068)">
              <path
                d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                fill="#000100"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8638 23.7459C17.8602 20.6977 22.5257 18.6881 24.86 17.7171C31.5251 14.9449 32.91 14.4633 33.8127 14.4474C34.0112 14.4439 34.4552 14.4931 34.7427 14.7265C34.9855 14.9235 35.0523 15.1896 35.0843 15.3764C35.1162 15.5632 35.1561 15.9887 35.1244 16.3212C34.7632 20.1162 33.2004 29.3256 32.4053 33.576C32.0689 35.3745 31.4065 35.9775 30.7651 36.0365C29.3714 36.1648 28.3131 35.1155 26.9632 34.2306C24.8509 32.846 23.6576 31.984 21.6072 30.6328C19.2376 29.0713 20.7737 28.2131 22.1241 26.8105C22.4775 26.4435 28.6183 20.858 28.7372 20.3513C28.752 20.2879 28.7658 20.0517 28.6255 19.927C28.4852 19.8022 28.2781 19.8449 28.1286 19.8788C27.9167 19.9269 24.5423 22.1573 18.0053 26.5699C17.0474 27.2277 16.1799 27.5481 15.4025 27.5313C14.5456 27.5128 12.8972 27.0468 11.6718 26.6485C10.1688 26.1599 8.97429 25.9016 9.07831 25.0719C9.13248 24.6397 9.72763 24.1977 10.8638 23.7459Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_210_6068">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <hr className=" border-gray-200 my-[16px]" />

      <div className="container px-6 py-[6px] md:py-[20px] mx-auto">
        <div className="grid grid-cols-1  md:flex md:justify-between gap-5 ">
          {/* First column */}
          <div className="lg:w-1/3 mr-11">
            <h1 className="text-gray-800 text-xl font-semibold pb-3">Wizz</h1>
            <p className="text-gray-600 text-base font-normal">
              Discover high paying crypto bounties, projects, and grants from
              the best Solana companies in one place and apply to them using a
              single profile.
            </p>
            <div className="flex items-center space-x-1 pt-[8px] md:pt-[10px]">
              <h1 className="text-[16px] text-gray-600">Email:</h1>
              <a
                href="mailto:wizz@gmail.com"
                className="text-blue-500 hover:text-blue-600 font-normal hover:font-semibold transition duration-300 text-sm rounded-lg p-2"
              >
                wizz@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <h1 className="text-[16px] text-gray-600">Contact:</h1>
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:text-blue-600 font-normal hover:font-semibold transition duration-300 text-sm rounded-lg p-2"
              >
                +1234567890
              </a>
            </div>
          </div>

          {/* Second column */}
          <div className="md:w-2/3 md:flex md:justify-around md:space-x-12">
            <div className="flex flex-col mb-6 lg:mb-0">
              <p className="text-[#303850] text-lg font-semibold">
                OPPORTUNITIES
              </p>
              <div className="flex flex-col items-start mt-2 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 text-lg font-normal transition-colors duration-300 hover:underline hover:text-green-600"
                >
                  Bounties
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-lg font-normal transition-colors duration-300 hover:underline hover:text-green-600"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* Third colum */}
            <div className="flex flex-col mr-[20px]">
              <p className="text-[#303850] text-lg font-semibold">CATEGORIES</p>
              <div className="flex flex-col items-start mt-2 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 text-lg font-normal transition-colors duration-300 hover:underline hover:text-green-600"
                >
                  Development
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-lg font-normal transition-colors duration-300 hover:underline hover:text-green-600"
                >
                  Content
                </a>
                <a
                  href="#"
                  className="text-gray-600 text-lg font-normal transition-colors duration-300 hover:underline hover:text-green-600"
                >
                  Design
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:mt-8 mb-[20px]" />

        <div className="flex justify-center">
          <h3 className="text-gray-600 text-base font-normal">
            © 2023 — Copyright
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
