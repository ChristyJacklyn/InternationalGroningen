import React from "react";
import { Link } from "react-router-dom";

const FindRightInfo = () => {

    return(
        <div className="border">
           <div className="flex gap-4 flex-col lg:flex-row bg-orange-50 " >
                <div className="lg:flex-1 lg:p-4 " > 
                    <div style={{fontSize:'50px',fontWeight:'bold'}}>Find the right information</div>
                    <div className="text-xl font-bold">Here is a list of our platforms which are useful for internationals in Groningen.</div>
                 </div>
                <div className="lg:flex-1 lg:p-4 space-y-2">
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://www.athomeingroningen.com/"><h1 className='bg-black inline text-white p-1 rounded'>Housing</h1>
                        <div>At Home in Groningen</div> 
                        <div className='mb-2'>Housing.Housing information </div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://gemeente.groningen.nl/en"><h1 className='bg-black inline text-white p-1 rounded'>Practical matters</h1>
                        <div>Municipality of Groningen</div>
                        <div className='mb-2'>Registering at city hall, parking, city services</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://iwcn.nl/"><h1 className='bg-black inline text-white p-1 rounded'>Practical matters</h1>
                        <div>International Welcome Center North (IWCN)</div>
                        <div className='mb-2'>Supporting internationals in smoothly transitioning to living, working, and settling in</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white">  <a href=""><h1 className='bg-black inline text-white p-1 rounded'>Study</h1>
                        <div>GroningenLife</div>
                        <div className='mb-2'>Everything about student life in Groningen</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://www.esn-groningen.nl/"><h1 className='bg-black inline text-white p-1 rounded'>Study</h1>
                        <div>Erasmus Student Network (ESN)</div>
                        <div className='mb-2'> International student association</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://www.makeitinthenorth.nl/"><h1 className='bg-black inline text-white p-1 rounded'>Work</h1>
                         <div>Make it in the North</div>
                         <div className='mb-2'> Career platform with jobs and companies in the North</div>
                         <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://groningen.hereandnow.nl/"><h1 className='bg-black inline text-white p-1 rounded'>City living</h1>
                        <div>Here & Now</div>
                        <div className='mb-2'>Event agenda Groningen</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                    </div>
                    <div className="outarrowdiv relative border-2 p-2 rounded bg-white"><a href="https://www.esn-groningen.nl/"><h1 className='bg-black inline text-white p-1 rounded'>Study</h1>
                        <div>Erasmus Student Network (ESN)</div>
                        <div className='mb-2'>International student association.</div>
                        <div className=" absolute  outarrow right-7 top-2" style={{fontSize:'30px',color:'black',fontWeight:'bold'}}>&#8599;</div></a>
                     </div>
                </div>
            </div>
        </div>
       
    );
}

export default FindRightInfo;