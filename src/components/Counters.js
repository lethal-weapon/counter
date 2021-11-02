import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Counter} from './Counter';

export const Counters = () => {
  const counterSize = useSelector((state) => state.counterSize);
  const [counterList, setCounterList] = useState([]);

  useEffect(() => {
    const array = new Array(counterSize).fill(Date.now());
    setCounterList(array);
  }, [counterSize]);

  return (
    <>
      {
        counterList.map((item, index) =>
          <Counter key={item + index}/>
        )
      }
    </>
  );
}
