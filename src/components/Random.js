import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

  const {gif, loading, fetchData} = useGif();
    
  return (
    <div className='mt-10 py-4 w-full md:w-[730px] bg-[#EA9DA9] rounded-xl border-2 border-[#6B7280] flex flex-col items-center gap-4'>

        <h1 className='font-bold underline text-xl md:text-2xl uppercase'>a random gif</h1>

        {loading ? <div className='py-10'><Spinner/></div> : <img src={gif} alt='' className='max-w-full'/>}

        <button onClick={()=>fetchData()} className='bg-white bg-opacity-70 w-full md:w-[570px] rounded-lg py-2 my-2 font-medium hover:bg-opacity-100 transition-all duration-200'>
          GENERATE
        </button>

    </div>

  );
}

export default Random;