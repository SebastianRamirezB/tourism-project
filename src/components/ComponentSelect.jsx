'use client';
import { useState } from 'react';

export const ComponentSelect = ({ options = [''], title, actionFunction }) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <label>
      <h2 className="text-2xl font-medium mb-4">{title}</h2>
      <div className="flex items-center justify-between border w-full  h-[78px]  px-11 border-disabled mt-1 rounded-[80px]" htmlFor="">
        <select
          className="h-full w-full text-2xl outline-none cursor-pointer"
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            actionFunction(e.target.value);
          }}
        >
          <option >----</option>

          {
            options.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              );
            })
          }
        </select>

      </div>

    </label>
  );
};
