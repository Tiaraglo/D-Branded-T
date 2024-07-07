import Toastify from 'toastify-js'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'



export default function Nav({ setPage }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    function about() {
        navigate('/about')
    }

    function publicHome() {
        navigate('/')
    }

    return (<>
        <title>D'Branded T</title>
        <header className="header-area">
            {/* Navbar */}
            <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-none ">
                <div className="navbar-start">
                    {/* <a onClick={aboutUs} className="text-2xl font-bold px-6"> */}
                    <a className="text-2xl font-bold px-6">

                        <button onClick={about} className="btn btn-outline btn-info text-blue-700"> About Us </button>
                    </a>
                </div>

                <div className="navbar-center">
                    <a onClick={publicHome} className="btn btn-ghost normal-case text-xl text-blue-700">D'Branded'T</a>
                </div>
                <div className="navbar-end">
                </div>

            </div>
        </header>
        {/* End-Navbar */}

    </>)
}