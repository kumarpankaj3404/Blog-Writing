import { useEffect, useState } from "react";

const useFetch = (url) => {
    const[Data , setData] = useState(null);      //setting initial value to null can also use an array of objects
    const[Load , setLoad] = useState(true);
    const[Error , setError] = useState(false);

  useEffect(() => {
        const abortCont = new AbortController();

        fetch(url,{signal : abortCont.signal})
          .then(res =>{
              if(!res.ok){
                throw Error('Message');
              }
              return res.json();
              
          })
            .then(data =>{
                console.log(data);
                setData(data);
                setLoad(false);
                setError(false);
            })
            .catch(err =>{
              if(err.name === 'AbortError'){
                console.log('Fetch Aborted');
              }else{
                setError(err.message);
                setLoad(false);
              }
            });
            return ()=> abortCont.abort();
  },[url]);
  return {Data,Load,Error};
}
export default useFetch;