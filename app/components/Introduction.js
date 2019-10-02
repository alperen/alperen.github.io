import React from "react";

function Introduction() {
  return (
    <div>
      <div>
        <h2>Alperen TÜRKÖZ</h2>
      </div>
      <div>
        <p className="mb-0 d-none d-md-block">
          junior javascript developer · from Izmir, Turkiye
        </p>
        <p className="mb-0 d-block d-md-none">
          junior javascript developer <br /> from Izmir, Turkiye
        </p>
        <p className="mb-0">
          <a
            href="mailto:alperentrkz@gmail.com"
            data-balloon="My personal e-mail address"
            data-balloon-pos="down"
          >
            alperentrkz@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Introduction;
