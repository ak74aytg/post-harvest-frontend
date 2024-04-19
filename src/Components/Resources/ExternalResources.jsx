import React from "react";

function ExternalResources() {
  const resources = [
    {
      title: "Grain Quality Assessment Guide",
      description:
        "A comprehensive guide to assessing grain quality in postharvest management.",
      link: "https://www.usfarmdata.com/",
    },
    {
      title: "Best Practices for Grain Storage",
      description:
        "Learn about the best practices for storing grains to maintain quality and minimize losses.",
      link: "https://www.uaex.uada.edu/farm-ranch/crops-commercial-horticulture/rice/",
    }
    // Add more external resources as needed
  ];

  return (
    <div className="external-resources-container bg-gray-100 py-8 px-4 lg:px-0">
      <h2 className="nav-green text-xl md:text-3xl roboto-regular mb-5 mt-5 text-center">
        External Resources
      </h2>
      <ul className="resources-list md:flex-row flex-col flex justify-evenly">
        {resources.map((resource, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              For more information, refer this site
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalResources;
