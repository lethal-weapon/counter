import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';

export function Counters({
                           size,
                           incrementSum,
                           decrementSum
                         }) {
  const [counterList, setCounterList] = useState([]);

  useEffect(() => {
    const array = new Array(size).fill(Date.now());
    setCounterList(array);
  }, [size]);

  return (
    <>
      {
        counterList.map((item, index) =>
          <Counter
            key={item + index}
            incrementSum={incrementSum}
            decrementSum={decrementSum}
          />
        )
      }
    </>
  );
}
