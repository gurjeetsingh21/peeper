import React from "react";

const Card = (props) => {
  return (
    <div
      className={`rounded-lg ${
        props.height ? props.height : "h-[275px]"
      } p-4  backdrop-blur-[20px]`}
    >
      <div className="">
        <h2 className="font-poppins text-lg font-extrabold mb-3">
          {props.title}
        </h2>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
