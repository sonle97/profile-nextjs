import React from "react";
import ListCard from "../../../ui/ListCard";
import Section from "../../../ui/Section";
import { portfolios } from "../data";

function Portfolio() {
  return (
    <Section delay={0.1}>
      <ListCard data={portfolios} isBlog={false} />
    </Section>
  );
}

export default Portfolio;
