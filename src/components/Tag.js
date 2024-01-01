import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

    const [tag, setTag] = useState('cute cats');

    const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='my-10 py-4 max-w-[730px] w-full sm:mx-auto bg-green-400 rounded-xl border-2 border-[#6B7280] flex flex-col items-center'>

        <h1 className='font-bold underline text-2xl uppercase mb-4'>random {tag} gif</h1>

        {loading ? <div className='py-20'><Spinner/></div> : <img src={gif} alt='' className='max-w-full'/>}

        <input value={tag} onChange={(event)=>setTag(event.target.value)} className='w-full sm:max-w-[570px] h-[45px] mt-4 mb-2 rounded-lg text-center text-lg'/>

        <button onClick={()=>fetchData()} className='bg-white bg-opacity-70 w-full sm:max-w-[570px] rounded-lg py-2 mb-2 font-medium hover:bg-opacity-100 transition-all duration-200'>
          GENERATE
        </button>

    </div>

  );
}

export default Tag;