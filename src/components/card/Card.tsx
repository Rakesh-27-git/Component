import { SetStateAction, useState } from "react";

const paymentOptions = [
  {
    id: "upi",
    label: "UPI",
    description: "Pay by any UPI app",
    img: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif",
  },
  {
    id: "card",
    label: "Credit / Debit / ATM Card",
    description: "Add and secure cards as per RBI guidelines",
    img: "https://cdn-icons-png.flaticon.com/512/6963/6963703.png",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    description:
      "This instrument has low success, use UPI or cards for better experience",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY3HGYq4-Iza7CsFWRkDm_PZ39weTxV1Pg1pbAlrHPA&s",
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    description: "",
    img: "https://e7.pngegg.com/pngimages/185/494/png-clipart-computer-icons-payment-money-cash-on-delivery-blue-angle-thumbnail.png",
  },
];

const Card = () => {
  const [selectedOption, setSelectedOption] = useState("upi");

  const handleRadioChange = (option: SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-screen w-full ">
      <div className="sm:w-full lg:w-[60%] bg-white">
        <h1 className=" sm:text-sm  lg:text-xl font-semibold text-white flex items-center h-12 pl-16 bg-[#2874F0] ">
          PAYMENT OPTIONS
        </h1>
        <div className=" p-4 cursor-pointer">
          {paymentOptions.map(({ id, label, description, img }) => (
            <div
              key={id}
              className={` flex items-center gap-5 h-20 px-4 m-3 border-b-[1px] ${
                selectedOption === label
                  ? "border-[2px] rounded-lg border-blue-300"
                  : ""
              } `}
              onClick={() => handleRadioChange(label)}
            >
              <input
                type="radio"
                title={label}
                checked={selectedOption === label}
                onChange={() => {}}
                className="cursor-pointer"
              />
              {img && (
                <div className="w-7">
                  <img
                    src={img}
                    alt="Payment-Options"
                    className="bg-center bg-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <h1>{label}</h1>
                <span className="text-sm font-medium text-green-500">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
