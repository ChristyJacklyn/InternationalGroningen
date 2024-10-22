import React from "react";


const PageLayout = ({image,imageTitle,desc}) =>{

    return(
        <div className="realtive h-full w-full">  {/*flex flex-col h-full w-full min-h-screen bg-cover bg-center bg-no-repeat*/}
                <div className="relative">
                    <img
                        src={image}
                        alt=''
                        className="h-[75vh] w-full object-cover opacity-90"
                    />
                 
                <div className="paradiv absolute flex flex-col bottom-0 left-0 right-0 p-1 prounded-lg">
                    <div className="imagepara font-oswald text-white px-4 sm:px-2 flex-1">{imageTitle}</div>
                    <div className="imagepara2 text-white flex-1">{desc}</div>
                </div>    
            </div>   
        </div>
    );
}

export default PageLayout;