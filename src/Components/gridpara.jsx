import React from "react";



const Gridpara = ({image,title,desc,image2,title2,desc2}) =>{

    const arrowStyle = {
        marginRight: '8px',
        color: '#333'
      };

    return(
        <div className="flex flex-col">
            <div className="flex justify-end items-end">
                <div className="secondgridcontainer p-3 bg-blue-100">
                    <div className="div p-4"><img src={image} alt={title} className=" buinessimage1 rounded-xl" style={{height:'500px',width:'500px'}}/></div>
                    <div className="flex flex-col text-xl m-3 p-10 ">
                        <div className="div p-4"  style={{fontSize:'40px', fontFamily:'Arial,Sofia',fontWeight:'bold'}}>{title}</div>
                        <div className="div p-4">{desc}</div>
                        <ul className="p-4"><li className="" style={{listStyleType: 'none', padding: 0}}> Campus Groningen</li>
                            <li className="" style={{listStyleType: 'none', padding: 0}}> Make it the North </li>
                            <li className="" style={{listStyleType: 'none', padding: 0}}></li></ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-start"></div>
                <div className="secondgridcontainer2 p-4">
                    <div className="flex flex-col text-xl m-3 p-10">
                        <div className="div p-4"  style={{fontSize:'40px', fontFamily:'Arial,Sofia',fontWeight:'bold'}}>{title2}</div>
                        <div className="div p-4">{desc2}</div>
                    </div>
                <div className="div p-4"><img src={image2} alt={title2} className="businessimage2 rounded-xl" style={{height:'500px',width:'450px'}}/></div>
            </div>
        </div>
    );
}

export default Gridpara;