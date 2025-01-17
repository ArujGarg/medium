import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return <div>
        <div>
            <Appbar />
        </div>
        <div className="flex flex-col">
            <div>
                <TextEditor onChange={(e) => {
                    setTitle(e.target.value);
                    setContent(e.target.value);
                }} />
            </div>
            <div className="mt-2">
                <button onClick={() => {
                    axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    })
                }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Publish</button>
            </div>
        </div>
    </div>
}


function TextEditor({onChange}: {onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="flex justify-center mt-14">
    <div className="flex flex-col w-full max-w-2xl h-full max-h-2xl">
        <div>
            <textarea onChange={onChange}
                className="block p-2.5 h-20 w-full max-w-2xl text-3xl text-gray-900 rounded-lg placeholder:text-5xl caret:h-3xl border"
                placeholder="Title"
            />
        </div>
        <div className="mt-4">
            <textarea onChange={onChange}
                className="block p-2.5 h-full w-full max-w-2xl text-xl text-gray-900 rounded-lg border"
                placeholder="Tell your story..."
            />
        </div>
     </div>
    </div>
}