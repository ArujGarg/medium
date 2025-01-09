import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar />
        <BlogCard 
            authorName="Aruj"
            title="How an Ugly Single-Page website makes $5000 a month with affilifate marketing"
            content="Text refers to the actual words written in a book, newspaper, blog post, or any other written work. Pictures, charts, and other images are not text. When you read something, you are looking at text and using your language skills to get meaning out of it. Something that doesn't contain any text is textless."
            publishedDate="4 Jan 2025" />

        <BlogCard 
                    authorName="Aruj"
                    title="How an Ugly Single-Page website makes $5000 a month with affilifate marketing"
                    content="Text refers to the actual words written in a book, newspaper, blog post, or any other written work. Pictures, charts, and other images are not text. When you read something, you are looking at text and using your language skills to get meaning out of it. Something that doesn't contain any text is textless."
                    publishedDate="4 Jan 2025" />

        <BlogCard 
                    authorName="Aruj"
                    title="How an Ugly Single-Page website makes $5000 a month with affilifate marketing"
                    content="Text refers to the actual words written in a book, newspaper, blog post, or any other written work. Pictures, charts, and other images are not text. When you read something, you are looking at text and using your language skills to get meaning out of it. Something that doesn't contain any text is textless."
                    publishedDate="4 Jan 2025" />
                
    </div>
}