import React from "react";
import Section from "../../../ui/Section";
import FormContact from "./FormContact";
import Informations from "./Informations";

const index = () => {
  return (
    <Section delay={0.1}>
      <div className="flex flex-wrap justify-between md:flex-row flex-col">
        <Informations />
        <FormContact />
      </div>
    </Section>
  );
};

export default index;
