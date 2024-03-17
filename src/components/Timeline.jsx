// src/components/Timeline.js
import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
      {events.map((event, index) => (
        <div key={index} className="relative">
          <div className="border-l-2 border-gray-400 absolute h-full border z-10 left-1/2 ml-px"></div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex">
            <div className="flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="h-16 w-16 rounded-full"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-600">{event.description}</p>
              <span className="text-gray-400 text-sm">
                {event.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
