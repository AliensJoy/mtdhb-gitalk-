import React from "react";

export default ({ src, className }) => (
  <div
    className={`gt-avatar ${className}`}
    style={{ background: `url(${src}) no-repeat`, backgroundSize: "cover" }}
  />
);
