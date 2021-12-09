import React from "react";
import ListCard from "../../../ui/ListCard";
import Section from "../../../ui/Section";
import { blogs } from "../data";

function Blog() {
  return (
    <Section delay={0.1}>
      <ListCard data={blogs} />
    </Section>
  );
}

export default Blog;
