
import React from "react";
import conferenceImage1 from "../images/ministry1.jpeg";
import conferenceImage2 from "../images/ministry3.png";
import conferenceImage3 from "../images/ministry2.png";
import conferenceImage4 from "../images/ministry3.png";
import conferenceImage5 from "../images/ministry2.png";

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-16 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <div className="col-span-1 sm:col-span-9 md:col-span-8">
              {/* text section */}
              <div className="max-w-2xl mx-auto sm:text-left sm:mx-0">
                <h1 className="text-4xl md:text-6xl font-bold md:mb-10">
                  <span className="text-black">Discover More </span>
                  <span className="text-lime-600">About Us</span>
                </h1>
                <p className="mt-4 text-m text-gray-500 text-justify">
                  Welcome to our conference tracking website! We believe in
                  revolutionizing the conference experience, ensuring seamless
                  navigation, real-time updates, and enhanced networking
                  opportunities for all attendees.
                </p>
                <p className="mt-4 text-m text-gray-500 text-justify">
                  Browse through our website to learn more about our mission,
                  vision, and how we can elevate your conference participation.
                </p>
                <a
                  href="/"
                  className="inline-block rounded-lg mt-6 border border-transparent bg-red-600 px-5 py-3 text-center font-bold text-white hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  Explore Now
                </a>
              </div>
              <div className="max-w-2xl mt-10">
                <h2 className="text-xl font-bold text-lime-600 sm:text-4xl">
                  Mission
                </h2>
                <p className="mt-4 text-m text-gray-500 text-justify">
                  Our mission is to provide a comprehensive conference tracking
                  platform that simplifies event management, enhances attendee
                  experiences, and fosters meaningful connections between
                  professionals from various industries.
                </p>
                <h2 className="text-xl font-bold text-lime-600 mt-10 sm:text-4xl">
                  Vision
                </h2>
                <p className="mt-4 text-m text-gray-500 text-justify">
                  Our vision is to be the leading provider of innovative conference
                  tracking solutions, empowering individuals to optimize their
                  conference participation, expand their networks, and stay ahead in
                  their respective fields.
                </p>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-3 md:col-span-4">
              {/* Decorative image grid */}
              <div className="hidden sm:grid grid-cols-2 gap-6 sm:gap-8">
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage1}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage4}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage3}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage2}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage1}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
                <div className="h-60 w-full overflow-hidden rounded-lg sm:block hidden">
                  <img
                    src={conferenceImage5}
                    alt=""
                    className="object-contain object-center h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;