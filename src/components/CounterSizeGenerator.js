import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetCounterSum, updateCounterSize} from '../store/actions/CounterAction';

export const CounterSizeGenerator = () => {
  const dispatch = useDispatch();
  const counterSize = useSelector((state) => state.counterSize);

  const handleSizeChange = (e) => {
    let newSize = parseInt(e.target.value.toString());
    if (newSize >= 1 && newSize <= 5 && newSize !== counterSize) {
      dispatch(updateCounterSize(newSize));
      dispatch(resetCounterSum());
    }
  }

  const generateNewCounterWithRandomSize = () => {
    const newSize = 1 + Math.floor(Math.random() * 5);
    if (newSize !== counterSize) {
      dispatch(updateCounterSize(newSize));
      dispatch(resetCounterSum());
    }
  }

  return (
    <div className="row m-5">
      <div className="col-12 col-md-4"/>
      <div className="col-12 col-md-4">
        <div className="row">
          <div className="col-4 text-md-end fs-2 fw-light hvr-cursor-default">
            Size:
          </div>
          <div className="col-4 text-center">
            <input type="number"
                   min="1"
                   max="5"
                   className="ps-4 fs-2 fw-bold text-warning bg-transparent border-0"
                   value={counterSize}
                   onChange={handleSizeChange}
            />
          </div>
          <div className="col-4 text-md-start">
            <button className="mt-1 btn btn-outline-light fs-5"
                    onClick={generateNewCounterWithRandomSize}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4"/>
    </div>
  );
}
