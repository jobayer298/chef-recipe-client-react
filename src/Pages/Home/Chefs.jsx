import React, { useEffect, useState } from 'react';
import Chef from './Chef/Chef';


const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch("https://chef-server-jobayer298.vercel.app/chefs")
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    }, [])
    return (
      <div className="my-container py-14 ">
        <h2 className="text-center font-bold text-3xl border-b-4 border-indigo-500 md:w-[340px] mx-auto ">
          Our Chefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14 px-4 md:px-0">
          {chefs.map((c) => (
            <Chef key={c.id} c={c}></Chef>
          ))}
        </div>
      </div>
    );
};

export default Chefs;