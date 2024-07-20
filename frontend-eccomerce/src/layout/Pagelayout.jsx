import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";


const Pagelayout = ({ children }) => {
    return ( 
        <>
            <Header/>
            {children}
            <Footer/>
        </>
     );
}
 
export default Pagelayout;