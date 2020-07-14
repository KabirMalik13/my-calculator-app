import React from 'react';

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

const calculator = () => (
  <main className="calculator">
    <Screen />
    <Keypad />
  </main>
);

export default calculator;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

