import React from 'react';
import {Counters} from './components/Counters';
import {CounterSum} from './components/CounterSum';
import {CounterSizeGenerator} from './components/CounterSizeGenerator';
import {Header} from './components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <CounterSizeGenerator/>
      <Counters/>
      <CounterSum/>
    </>
  );
}
