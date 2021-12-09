import React from "react";
import Section from "../../../../ui/Section";
import ResumeList from "../ResumeList";
import { EducationStyled } from "./styles";

const Education = () => {
  return (
    <Section delay={0.1}>
      <EducationStyled>
        <h4 className="maintitle text-black-3 md:text-3xl text-2xl font-bold mb-5 mt-2">
          Education Quality
        </h4>
        <ResumeList />
      </EducationStyled>
    </Section>
  );
};

export default Education;
