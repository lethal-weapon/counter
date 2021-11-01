import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';

export function Counters({
                           size,
                           incrementSum,
                           decrementSum
                         }) {
  const [counterList, setCounterList] = useState([]);

  useEffect(() => {
    const array = new Array(size).fill(1);
    setCounterList(array);
  }, [size]);

  return (
    <>
      {
        counterList.map((item, index) =>
          <Counter
            key={index}
            incrementSum={incrementSum}
            decrementSum={decrementSum}
          />
        )
      }
    </>
  );
}
