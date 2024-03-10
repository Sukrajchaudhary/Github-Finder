import React from "react";
import { infinity } from "ldrs";
infinity.register();
const Spinner = () => {
  return (
    <div className="text-center">
      <div role="status">
        <l-infinity
          size="55"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3"
          color="white"
        ></l-infinity>
      </div>
    </div>
  );
};

export default Spinner;
