import axios from 'axios';
import { useState } from 'react'
import Toastify from 'toastify-js'
import { useNavigate } from 'react-router-dom'


export default function Login({ setPage, url }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault();
        try {
            let { data } = await axios.post(`${url}/login`, { email, password });
            // console.log(data);
            localStorage.setItem("access_token", data.access_token);
            navigate('/')

            Toastify({
                text: "Success Login",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#00B29F",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();

        } catch (error) {
            // console.log(error.response.data.message, 'styuioiuytrertyuioiuytrertyuiuytr');
            Toastify({
                text: error.response.data.message,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
        }
    }

    return (
        <>
            <div
                className="bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url(https://st.depositphotos.com/1433253/3248/i/450/depositphotos_32486391-stock-photo-abstract-biz-background.jpg)"
                }}

            >
                <div className="absolute bg-gradient-to-b from-green-500 to-blue-400 opacity-75 inset-0 z-0" />
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <img src="" className="mb-3" />
                            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome To D'Branded'T's CMS Page  </h1>
                            <p className="pr-3">
                                D'Branded'T is a lifestyle wear that provides various categories from well-known brands, here, take a look...
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Log In </h3>
                                <p className="text-gray-500">Please log in to your account.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type=""
                                        placeholder="mail@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={handleLogin}
                                        type="submit"
                                        className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Log In
                                    </button>
                                </div>

                            </div>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2023-2024
                                    <a
                                        href="https://codepen.io/uidesignhub"
                                        rel=""
                                        target="_blank"
                                        title="Ajimon"
                                        className="text-green hover:text-green-500 "
                                    >
                                        D'Branded'T
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}