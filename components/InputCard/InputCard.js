import React, { useState } from "react";
import InputCardBody from "./InputCardBody";
import InputCardHeader from "./InputCardHeader";
import InputCardSubmit from "./InputCardSubmit";

const InputCard = ({ title }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setAmount("");
  };
  const handleIt = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="p-4 flex flex-col m-4 max-w-2xl shadow-md rounded gap-2">
      <form className="grow" onSubmit={handleSubmit}>
        <InputCardHeader title={title} />
        <InputCardBody
          handleSubmit={handleSubmit}
          handleChange={handleIt}
          amount={amount}
        />
        <InputCardSubmit handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default InputCard;
