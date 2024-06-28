import React from "react";
import rent from "../../public/rent.png";
import express from "../../public/express.png";
import logo from "../../public/logo.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: rent,
      name: "Car Rental System",
      link: "https://github.com/priyanshtan/Car_Rental_System.git",
      description:
        "Developed a mini project: a comprehensive car rental management system in Java, utilizing object-oriented programming principles for robust and maintainable code. The system covers customer management, vehicle tracking, and reservations."
    },
    {
      id: 3,
      logo: logo,
      name: "myStore",
      link: "https://github.com/priyanshtan/e-Commerce.git",
      description:
        "Developed a full-stack E-Commerce Website using Node.js, Express, MongoDB, and React. The project features user authentication, CRUD operations, and dynamic content rendering. Node.js and Express handle the backend, providing RESTful APIs, while MongoDB stores user data and application state. The React frontend offers a responsive, interactive user interface."
    },
    {
      id: 2,
      logo: express,
      name: "College Management System",
      link: "",
      description:
        "Currently working on a full-stack college management system using Node.js, Express, MongoDB, and Vue.js. The system includes student records, course registrations, attendance, and faculty management, along with a payment gateway integration. Node.js and Express handle the backend with RESTful APIs, while MongoDB securely stores academic data. The Vue.js frontend offers a responsive and interactive user interface. This project demonstrates expertise in modern web development, ensuring efficient data handling, a seamless user experience, and maintainable code."
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-10">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              className="md:w-[300px] border-[5px] rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-4"
                  alt={name}
                />
                <div className="text-center">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {link ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Source code
                  </button>
                ) : (
                  <button
                    className="bg-gray-500 text-white font-bold px-4 py-2 rounded"
                    disabled
                  >
                    Source code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
