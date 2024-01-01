import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';    //axios is another way to make api calls - more secure than fetch api call

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;   //process to get value from environment variables
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async()=>{
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }, [tag])

    useEffect(()=>{
        fetchData();   //call the api automatically when the app first renders
    }, [fetchData]);

    return {gif, loading, fetchData};
}

export default useGif;