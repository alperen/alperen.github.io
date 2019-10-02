import React from "react";

function Row({title = "", children}) {

  return (
    <section className={`row mt-3 c-${title.toLowerCase()}`} id={title}>
      <div className="col col-4 d-none d-md-block opacity-on-drag text-right">
        <span>
          <b>{title && `${title}:`}</b>
        </span>
      </div>

      <div className="col col-12 d-block d-md-none text-center">
        <span>
          <b>{title && `${title}`}</b>
        </span>
      </div>

      <div className="col col-12 col-md-8 pl-md-0 text-justify">
        {children}
      </div>
    </section>
  );
}

export default Row;
