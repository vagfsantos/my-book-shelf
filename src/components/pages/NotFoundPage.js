import React from "react";

import HeroSection from "../HeroSection/HeroSection";

const NotFoundPage = () => (
  <HeroSection
    title="Nothing here =("
    subtitle="Make sure you typed the correct URL in your browser."
    sizeClass="is-medium"
    isFullHeight
  />
);

export default NotFoundPage;
