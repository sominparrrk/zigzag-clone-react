import React from 'react';
import BottomNav from './components/Menu/BottomNav';
import Header from './components/Menu/Header';
import Best from './views/Best';

const App = () => {
  return (
    <div className='px-3'>
      <Header />
      <Best />
      <BottomNav />
    </div>
  );
};

export default App;
