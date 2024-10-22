import React from "react";

const PageDesc = ({image,title,desc}) => {

    return(
        <div>
            <div><img src={image}>
            </img></div>
            <div>
                <div><h1>{title}</h1></div>
                <div><p>{desc}</p></div>
            </div>
        </div>
    );
}

export default PageDesc;