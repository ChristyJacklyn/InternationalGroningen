// this component will reload the page top when click component at any place of the page because when componentes placed at the bottom are being clicked then it goes to the directed page and opens at eh bottom

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollOnTop = () => {

    const {pathname} = useLocation();
    useEffect( () => {
        window.scrollTo(0,0);
    },[pathname]);

    return null;
}

export default ScrollOnTop;