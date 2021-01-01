import React from 'react';
import {Link} from "react-router-dom";



export default function Navbar() {
    return (
<nav className="flex justify-between items-center w-full bg-gray-900 py-2 px-2">
     <div>
     <Link to="/play" className="uppercase px-8 py-2 bg-indigo-500 rounded text-white max-w-max shadow-sm hover:shadow-md">Play</Link>  
     </div>
     <div>  <button className="uppercase px-8 py-2 bg-green-500 rounded text-white max-w-max shadow-sm hover:shadow-md">Log In</button></div>
   </nav> 
 
    )
}
