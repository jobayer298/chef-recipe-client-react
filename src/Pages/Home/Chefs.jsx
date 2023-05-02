import React, { useEffect, useState } from 'react';
import Chef from './Chef/Chef';


const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/chefs")
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    }, [])
    return (
      <div className="my-container py-14 ">
        <h2 className="text-center font-bold text-3xl border-b-4 border-indigo-500 w-[340px] mx-auto ">
          Our Chefs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-14'>
            {
                chefs.map(c => <Chef key={c.id} c={c}></Chef>)
            }
        </div>
      </div>
    );
};

export default Chefs;