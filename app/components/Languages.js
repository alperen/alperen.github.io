import React from "react";

function Languages() {
  return (
    <div className="row">
      <div className="col col-12">
        <p>
          <span>
            <i className="fas fa-caret-right" />
          </span>{" "}
          <span> Turkish </span> · Native Speaking
        </p>
      </div>
      <div className="col col-12">
        <p>
          <span>
            <i className="fas fa-caret-right" />
          </span>{" "}
          <span> English </span> · B1 - B2*
        </p>
        <p className="text-small text-muted">*It isn't proven officially.</p>
      </div>
    </div>
  );
}

export default Languages;
