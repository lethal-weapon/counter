import React, {useState} from 'react';
import {Counters} from './components/Counters';
import {CounterSum} from './components/CounterSum';
import {CounterSizeGenerator} from './components/CounterSizeGenerator';
import {Header} from './components/Header';

export default function App() {

  const [counterSize, setCounterSize] = useState(1);
  const [counterSum, setCounterSum] = useState(0);

  const incrementCounterSum = () =>
    setCounterSum(counterSum + 1)

  const decrementCounterSum = () =>
    setCounterSum(counterSum - 1)

  const updateCounterSize = (newSize) => {
    setCounterSize(newSize);
    setCounterSum(0);
  }

  return (
    <>
      <Header/>
      <CounterSizeGenerator
        counterSize={counterSize}
        updateCounterSize={updateCounterSize}
      />
      <Counters
        size={counterSize}
        incrementSum={incrementCounterSum}
        decrementSum={decrementCounterSum}
      />
      <CounterSum
        sum={counterSum}
      />
    </>
  );
}
