import React from 'react';

export function CounterSum({sum}) {
  return (
    <div className="row m-5 hvr-cursor-default">
      <div className="col-12 col-md-4"/>
      <div className="col-12 col-md-4">
        <div className="row text-center">
          <div className="col-6 fs-2 fw-light">
            Sum:
          </div>
          <div className="col-6 fs-1 fw-bold text-warning">
            {sum}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4"/>
    </div>
  );
}
