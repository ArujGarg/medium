import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog: Blog}) => {
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl ">
            <div className="col-span-8 pt-10 pl-10">
                <div className="text-5xl font-extrabold ">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-4">
                    Posted on 2nd Dec 2024
                </div>
                <div className="text-slate-600 pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 pt-10">
                <div>
                    Author 
                </div>
                <div className="flex mt-2 w-full">
                    <div className="flex flex-col justify-center pr-2 ">
                        <Avatar name={blog.author.name || "Anonymous"} size={10} />
                    </div>
                    <div className="pl-2 ">
                        <div className="text-2xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Random catch phrase about the author to grab the user's attention
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}