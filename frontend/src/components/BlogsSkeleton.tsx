import { Circle } from "./BlogCard"

export const BlogsSkeleton = () => {
    return <div>
        <div className=" flex justify-center">
            <div className="w-1/2 cursor-pointer">
                <div className="flex items-center">
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4"></div>
                    </div>
                    <div>
                        <Circle />
                    </div>
                    <div className="ml-2">
                        <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
                    </div>
                </div>
                <div className="text-xl font-bold  mt-2 ">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                </div>
                <div className="mt-2 text-slate-500 ">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                </div>
                <div className="mt-6 text-slate-500 text-sm ">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
                </div>
                    <div className="h-px my-6 bg-slate-200 border-0 " >
                </div>
            </div>
        </div>
    </div>
    
    
}