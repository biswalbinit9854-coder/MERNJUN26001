import React from 'react';

function Card({ car, bike, volvo }) {
  return (
    <div className="w-[250px] p-2 shadow-2xl rounded-lg hover:scale-105 transition-all duration-500 place-items-center m-2">
     <div className=" w-full flex justify-center">
      <img src={car?.img || bike?.img || volvo?.img} alt="" className="h-30 w-30 rounded-full" />
    </div>
<p className="text-center font-bold text-gray-700">
  {car.title || bike.title || volvo.title}
</p>
<p className="text-gray-500">{car.description || bike.description || volvo.description}</p>
<button className="p-3 w-full bg-black rounded-xl mt-2 text-white font-bold hover:bg-black-400 cursor-pointer">
  View Page
</button>
    </div>
  );
}

export default Card;
