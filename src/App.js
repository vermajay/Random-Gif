import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
      <div className='background flex flex-col w-full h-full items-center'>
        <h1 className='bg-white rounded-2xl text-center mt-10 lg:mt-20 py-4 px-6 lg:px-48 text-3xl lg:text-4xl font-bold uppercase'>random gifs</h1>
        <div className='flex flex-col'>
          <Random/>
          <Tag/>
        </div>
      </div>
  );
}

export default App;