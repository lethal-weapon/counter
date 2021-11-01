import React, {useState} from 'react';

export function Counter({
                          incrementSum,
                          decrementSum
                        }) {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
    incrementSum();
  }

  const decrement = () => {
    setNumber(number - 1);
    decrementSum();
  }

  return (
    <div className="row mt-3">
      <div className="col-12 col-md-4"/>
      <div className="col-12 col-md-4">
        <div className="row">
          <div className="col-4 text-md-end">
            <button className="btn btn-outline-light"
                    onClick={decrement}
            >
              <i className="fa fa-minus"/>
            </button>
          </div>
          <div className="col-4 text-center">
            <span className="fs-3 hvr-cursor-default">{number}</span>
          </div>
          <div className="col-4 text-md-start">
            <button className="btn btn-outline-light"
                    onClick={increment}
            >
              <i className="fa fa-plus"/>
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4"/>
    </div>
  );
}
