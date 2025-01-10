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
            <div className="cursor-pointer">
                <Avatar name="Aruj" size={10}/>
            </div>
       </div>
    </div>  
}