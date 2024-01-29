import React  from "react";
import { Link } from "react-router-dom";

export const Header = ()=>{
    return (
        <div className="bg-blue-500 p-2">
            <div className="container mx-auto">
            <ul className="text-white flex justify-around">
                <li>
                    <Link  to='/todolist'>
                    All Todo
                    </Link>
                    
                    </li>
                <li>Completed todo</li>
                <li>Fav.</li>

            </ul>
            </div>
           
        </div>
    )
}

