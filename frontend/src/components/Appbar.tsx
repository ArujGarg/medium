import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="h-14 flex justify-center flex-col border-b mb-4">
       <div className="flex justify-between px-8 items-center">
            <Link to={'/blogs'}>
                <div className="text-3xl font-bold cursor-pointer">
                    Medium
                </div>
            </Link>
            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="mr-4">
                        <Link to={'/publish'}>
                            <button type="button" className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 dark:focus:ring-green-800">Publish</button>
                        </Link>
                    </div>
                    <div className="cursor-pointer">
                        <Avatar name="Aruj" size={10}/>
                    </div>
                </div>
            </div>
            
                 
            
       </div>
    </div>  
}