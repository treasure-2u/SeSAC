import React from "react";

export default function AnimalProps({ animal, reason }) {
  return (
    <>
      <h1>My favorite animal!</h1>
      <div>
        1. My favorite animal? : <span style={{ color: "red" }}>{animal}</span>
      </div>
      <div>2. why? : {reason}</div>
    </>
  );
}

AnimalProps.defaultProps = {
  animal: "rabbit",
  reason:
    "My pet, rabbit name is DDolkki, DDolkki is very smart rabbit. Because DDolkki knows how to cover up poo.",
};
