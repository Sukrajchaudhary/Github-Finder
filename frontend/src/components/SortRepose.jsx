import React from "react";

const SortRepose = ({ sortType, onSort }) => {
  const Button = [
    {
      name: " Most Recent",
      type:"recent"
    },
    {
      name: " stars",
      type:"stars"
    },
    {
      name: " forks",
      type:"forks"
    },
  ];
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {Button.map((button) => (
        <button
          key={button.name}
          onClick={() => onSort(button.type)}
          type="button"
          className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
				${sortType === button.type ? "border-blue-500" : ""}
				`}
        >
        {button.name}
        </button>
      ))}
    </div>
  );
};

export default SortRepose;
