import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ToggleFAQ = ({ item }) => {
  const [openFAQ, setOpenFAQ] = useState(false);

  const toggleFAQ = () => {
    setOpenFAQ(!openFAQ);
  };

  return (
    <div
      className={`border border-gray-200 bg-custom-gray p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        openFAQ ? 'max-h-full' : 'max-h-20'
      } overflow-hidden`}
      onClick={toggleFAQ}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{item.title}</div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transform transition-transform duration-300 ${
            openFAQ ? 'rotate-180' : ''
          }`}
        />
      </div>
      
      <p
        className={`mt-4 text-gray-700 transition-opacity duration-300 ${
          openFAQ ? 'opacity-100' : 'opacity-0 h-0 invisible'
        }`}
      >
        {item.text}
      </p>
    </div>
  );
};

export default ToggleFAQ;
