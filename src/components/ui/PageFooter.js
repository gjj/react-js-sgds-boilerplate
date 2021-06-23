import React from "react";
import { Footer } from "sgds-govtech-react";

function PageFooter() {
  const date = `23 Jun 2021`;

  return (
    <>
      <Footer title="Singapore Design Systems" date={date} />;
    </>
  );
}

export default PageFooter;
