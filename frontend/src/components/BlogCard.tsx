import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number
    authorName: string,
    title: string,
    content: string;
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title, 
    content,
    publishedDate
}: BlogCardProps) => {

    return <Link to={`/blog/${id}`}>
        <div className=" flex justify-center">
            <div className="w-1/2 cursor-pointer">
                <div className="flex items-center">
                    <div>
                        <Avatar name={authorName} />
                    </div>
                    <div className="ml-2 ">
                        {authorName}
                    </div>
                    <div>
                        <Circle />
                    </div>
                    <div className="ml-2">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-bold  mt-2 ">
                    {title}
                </div>
                <div className="mt-2 text-slate-500 ">
                    {content.slice(0, 200) + "..."}
                </div>
                <div className="mt-6 text-slate-500 text-sm ">
                    {`${Math.ceil(content.length/100)} min read`} 
                </div>
                <div className="h-px my-6 bg-slate-200 border-0 " >

                </div>
            </div>
        </div>
    </Link>
}


export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500 ml-2">
        
    </div>
}


export function Avatar({name, size = 6}: {name: string, size?: number}) {
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}

