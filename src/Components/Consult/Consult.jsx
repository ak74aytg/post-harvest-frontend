import React from "react";

function Consult() {
  const consultingServices = [
    {
      title: "Grain Storage Consultation",
      description:
        "Expert advice on optimizing grain storage facilities for maximum efficiency and minimal losses.",
    },
    {
      title: "Quality Testing Assistance",
      description:
        "Assistance with selecting and implementing quality testing equipment to ensure accurate grain assessment.",
    },
    {
      title: "Pest Management Strategies",
      description:
        "Customized pest management plans and strategies to prevent and control infestations in grain storage facilities.",
    },
    // Add more consulting services as needed
  ];

  return (
    <div className="consulting-services-container bg-gray-100 py-8 px-4 lg:px-0">
      <h2 className="nav-green text-3xl md:text-5xl roboto-regular mb-5 mt-5 text-center">
        Consulting Services Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {consultingServices.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
            <a className="block text-blue-500 mt-4" href="#contact">
              Contact Us for Details
            </a>{" "}
            {/* Update href with actual contact link */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consult;
