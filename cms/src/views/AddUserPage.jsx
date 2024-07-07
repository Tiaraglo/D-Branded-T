import { useState } from "react";
import axios from "axios";

export default function AddUserPage({ url }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState("");

    // console.log(url, 'ini');
    async function addUser() {
        try {
            const data = {
                username,
                email,
                password,
                phoneNumber,
                address,
            }

            let response = await axios.post(`${url}/add-user`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            }, data)

            Toastify({
                text: `here's the detail for product with id ${id}`,
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

            console.log(response);


        } catch (error) {
            console.log(error);
        }
    }

    addUser()

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await addUser()
        } catch (error) {
            console.log(error);
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
                            <p className="pr-1">
                                D'Branded'T is a lifestyle wear that provides various categories from well-known brands, here, take a look...
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="flex justify-center font-semibold text-2xl text-gray-800"> Add User </h3>
                                <p className="text-gray-500">'Hello Admin, please add an account'.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Username
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="username"
                                        placeholder="Enter an username"
                                        onChange={(e) => { setUsername(e.target.value); }}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="email"
                                        placeholder="mail@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Phone Number
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="phoneNumber"
                                        placeholder="Enter phoneNumber"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Address
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="address"
                                        placeholder="Enter address"
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="password"
                                        placeholder="Enter password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>


                                <div>
                                    <button
                                        onSubmit={handleSubmit}
                                        type="submit"
                                        className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Add
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