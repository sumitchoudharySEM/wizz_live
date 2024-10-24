import React from "react";

const DefaultFooter = () => {
  return (
    <footer className="bg-white px-4">
      <div className="container px-6 py-[20px] mx-auto">
        <div className="grid grid-cols-1  md:flex md:justify-between gap-5 ">
          {/* First column */}
          <div className="lg:w-1/3 mr-11">
            <h1 className="text-gray-800 text-xl font-semibold pb-3">Wizz</h1>
            <p className="text-gray-600 text-base font-normal">
              Discover high paying crypto bounties, projects, and grants from the
              best Solana companies in one place and apply to them using a single
              profile.
            </p>
          </div>

          {/* Second column */}
          <div className="md:w-2/3 md:flex md:justify-end md:space-x-12">
            <div className="flex flex-col mb-6 lg:mb-0">
              <p className="text-[#303850] text-lg font-semibold">OPPORTUNITIES</p>
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