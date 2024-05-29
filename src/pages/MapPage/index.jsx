import { useState } from "react";
import Map from "../../components/Map";

const MapPage = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="h-[calc(100vh-80px)] bg-zinc-800 text-white max-md:pt-20 overflow-hidden flex flex-col">
      <h6 className="px-6 pb-6">View Details: {tooltipContent}</h6>
      <div className="flex-grow flex">
        <Map setTooltipContent={setTooltipContent} />
      </div>
    </div>
  );
};

export default MapPage;
