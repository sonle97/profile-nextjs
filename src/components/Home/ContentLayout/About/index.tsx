import React from "react";

import AboutMe from "./AboutMe";
import WhatIamDoing from "./WhatIamDoing";
import OurTrustedClients from "./OurTrustedClients";
import Section from "../../../ui/Section";

const index = () => {
  return (
    <Section delay={0.1}>
      <AboutMe />
      <WhatIamDoing />
      <OurTrustedClients />
    </Section>
  );
};

export default index;
