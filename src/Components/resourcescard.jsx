import React from 'react';

const ResourcesCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative w-full justify-center items-center rounded flex flex-col sm:flex-row ">
      <div className="m-4 flex-1 flex justify-end items-center ">
        <div className='p-3 m-1 text-center lg:w-1/2 shadow-lg'>
            <div className="font-black text-xl mb-2 ">{title}</div>
            <p className="text-gray-700 text-base flex justify-center items-center">
              {description}
            </p>
          </div>
          </div>
        <div className=' p-2 flex-1 m-4 flex justify-start'>
            <img className="imagemove object-cover lg:w-1/2 " src={imageUrl} alt={title}/>
        </div>
        
    </div>
  );
};

export default ResourcesCard;