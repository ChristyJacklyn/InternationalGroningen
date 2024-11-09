import React,{useState,useEffect} from "react";
import SearchLayout from "./searchLayout";
import workingphoto from '../assets/working.jpg';
import liveingroningen from '../assets/livinggroningen.jpg';
import busimage from '../assets/business1.jpg';
import study from '../assets/studyingroningen.jpg';


const Search = () => {
    const [query, setQuery] = useState('');


    const searchdata= [
      {
        searchimage:workingphoto,
        searchimagetitle:'Working in Groningen',
        searchdesc: 'Working in groningen or Planning to work? Check the detail..',
        searchurl:'/workingingroningen',
      },
      {
        searchimage:liveingroningen ,
        searchimagetitle:'living in Groningen',
        searchdesc: 'Aro you moving to griningen? Check the details here..',
        searchurl:'/relocating',
      },
      {
        searchimage:busimage ,
        searchimagetitle:'business',
        searchdesc: 'Explore the Business possibility..',
        searchurl:'/business',
      },
      {
        searchimage:study ,
        searchimagetitle:'Study',
        searchdesc: 'Studying in Groningen?..',
        searchurl:'/studyingroningen',
      },
      {
        searchimage:liveingroningen ,
        searchimagetitle:'Contact us',
        searchdesc: 'Contact us on our working hours..',
        searchurl:'/contact',
      }
    ];

  
      // Filter pages based on the search query
        const filteredPages = query ? searchdata.filter(
            page =>
            page.searchimagetitle.toLowerCase().includes(query.toLowerCase()) ||
            page.searchdesc.toLowerCase().includes(query.toLowerCase())||
            page.searchurl.toLowerCase().includes(query.toLowerCase())
        ):[];

    return(
        <div className="flex flex-col">
          <div className="flex">
            <div className="p-4">
                <input 
                type='search'
                placeholder="search pages... "
                value= {query}
                onChange={(e) => setQuery(e.target.value)} 
                className="border p-4 text-xl rounded " style={{width:'300px',fontSize:'20px',color:'black'}}/>
            </div>
            </div>
            <div>
                {filteredPages.length > 0 ? (
                filteredPages.map((page,index) =>(
                   <SearchLayout
                   key={index}
                   searchimage={page.searchimage}    
                   searchimagetitle={page.searchimagetitle}
                   searchdesc={page.searchdesc}
                   searchurl={page.searchurl}
                   />
                )) 
            ) : (
            <div>No results found</div>
            )   
            }

            </div>

        </div>
    );
}

export default Search;