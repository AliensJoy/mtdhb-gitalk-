import React from "react";

export default ({ src, className }) => (
  <div
    className={`gt-avatar ${className}`}
    style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
  />
);
