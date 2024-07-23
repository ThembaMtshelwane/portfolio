import React from "react";

const SkillsItem = ({ name, years }) => {
  return (
    <section>
      <p>{name}</p>
      <p>{`${years} yrs`}</p>
    </section>
  );
};

export default SkillsItem;
