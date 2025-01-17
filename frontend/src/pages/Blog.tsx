import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: Number(id)
    });
    
    if(loading){
        return <div>
            <div>
                <Appbar />
            </div>
            <BlogSkeleton />
        </div>
    }
    return <div>
        <Appbar />
        {/*the line below ensures that fullblog component is rendered only if blog is defined and is not null. did this because typescript was giving error as blog could be undefined */}
        {blog && <FullBlog blog={blog}/>} 
    </div>
}