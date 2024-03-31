import { useState } from "react";
import { HiLightningBolt } from "react-icons/hi";

const Button = () => {
  const [ishover, setIshover] = useState(false);

  return (
    <button
      className="bg-[#3BB77E] px-3 py-2 w-32 flex items-center justify-center gap-2 rounded-sm text-white font-medium hover:bg-[#249a63] 
     transition duration-500"
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      Buy Now
      <span
        className=" transition duration-300 hover:translate-x-[3px]"
        style={{ transform: ishover ? "translateX(3px)" : "translateX(0)" }}
      >
        <HiLightningBolt />
      </span>
    </button>
  );
};

export default Button;
