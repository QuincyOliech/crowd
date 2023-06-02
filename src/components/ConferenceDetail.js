import React, { useEffect, useState } from "react";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";
import {
  FaHashtag,
  FaBuilding,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import image1 from "../assets/background1.webp";
import { Link, useParams } from "react-router-dom";

const ConferenceDetail = () => {
  const { referenceNumber } = useParams();
  const [conference, setConference] = useState(null);

  useEffect(() => {
    const fetchConference = async () => {
      try {
        const response = await fetch("/db.json"); 
        if (!response.ok) {
          throw new Error("Error fetching conference");
        }
        const data = await response.json();
        const conference = data.conferences.find(
          (conf) => conf.referenceNumber === referenceNumber
        );
        if (!conference) {
          throw new Error("Conference not found");
        }
        setConference(conference);
      } catch (error) {
        console.error("Error fetching conference:", error);
      }
    };

    fetchConference();
  }, [referenceNumber]);

  if (!conference) {
    return <p>Loading conference details...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* conference image */}
        <div className="col-span-2">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-3/4 flex justify-center">
              <img
                src={conference.image}
                alt="Conference"
                className="w-full h-auto max-h-1/2 object-cover rounded-3xl md:max-h-full md:rounded-3xl md:mx-0"
                style={{ maxHeight: "50vh" }} // Set the max-height using inline style
              />
            </div>
          </div>
        </div>

        {/* conference details */}
        <div className="col-span-1">
          <div className="flex items-center h-full md:justify-center md:mr-0">
            <div className="max-w-m">
              <div className="mx-auto mb-6 flex justify-center">
                <span className="inline-block h-1 w-full rounded-full bg-lime-600" />
                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-black" />
                <span className="inline-block h-1 w-2 rounded-full bg-black" />
                <span className="mx-1 inline-block h-1 w-1 rounded-full bg-black" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold mb-7">
                Conference Details
              </h2>

              <p className="text-gray-600 mb-2">
                <FaHashtag className="inline-block mr-3 text-lg text-lime-600 " />
                Reference Number:{" "}
                <span className="font-semibold">
                  {conference.referenceNumber}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaHashtag className="inline-block mr-3 text-lg text-lime-600" />
                Conference Title:{" "}
                <span className="font-semibold">{conference.title}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaBuilding className="inline-block mr-3 text-lg text-lime-600" />
                Ministry In Charge:{" "}
                <span className="font-semibold">
                  {conference.ministryInCharge}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaPhone className="inline-block mr-3 text-lg text-lime-600" />
                Phone Number:{" "}
                <span className="font-semibold">{conference.number}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaEnvelope className="inline-block mr-3 text-lg text-lime-600" />
                Email: <span className="font-semibold">{conference.email}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaMapMarkerAlt className="inline-block mr-3 text-lg text-lime-600" />
                Location:{" "}
                <span className="font-semibold">{conference.location}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaClock className="inline-block mr-3 text-lg text-lime-600" />
                Time: <span className="font-semibold">{conference.time}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <FaCalendarAlt className="inline-block mr-3 text-lg text-lime-600" />
                Date: <span className="font-semibold">{conference.date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* conference description */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="">
          <h2 className="text-2xl text-lime-600 font-bold mb-2">
            Conference Description
          </h2>
          <p className="text-gray-600">{conference.description}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-end mt-4">
          <Link
            to={`/conference/${conference.referenceNumber}/edit`}
            className="border border-lime-600 text-center hover:border-lime-700 text-lime-600 hover:text-lime-700 font-bold py-2 px-4 rounded-md mb-2 md:mr-2 md:mb-0"
          >
            <RiEdit2Line className="inline-block mr-1" />
            Update
          </Link>

          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
            <RiDeleteBin2Line className="inline-block mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetail;
