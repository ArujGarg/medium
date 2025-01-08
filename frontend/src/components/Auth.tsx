import { SignupInput } from "@arujgarg/medium-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
            <div className="flex flex-col w-1/2">
                <div className="text-center font-bold text-4xl">
                    {type === "signup" ? "Create an account" : "Login to your account"}
                </div>
                <div className="text-center mt-2 text-slate-500">
                    {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
                    <Link className="ml-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "Sign up"}</Link>
                </div>
                <div className="mt-2">
                    <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                        setPostInputs( {
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />
                    <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="******" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button type="button" className="mt-4 text-white bg-grey-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 w-full ">{type === "signup" ? "Sign up" : "Sign in"}</button>

                </div>
            </div>
            
        </div>
        
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

const LabelledInput = ({label, placeholder, onChange, type}: LabelledInputType) => {
    return <div className="mt-4">
        <div className="font-semibold">
            {label}
        </div>
        <div>
            <input type={type || "text"} className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} onChange={onChange} >
            </input>
        </div>
    </div>
}