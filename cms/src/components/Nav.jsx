import Toastify from 'toastify-js'
import { useNavigate, Link } from 'react-router-dom'


export default function Nav({ setPage }) {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear()
        Toastify({
            text: "Success Logout",
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
        navigate('/login')
    }



    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-gray-100 shadow">
            <div className="navbar-start">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-outline text-blue-700">CMS Features</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link to="/categories">List Categories</Link></li>
                        <li><Link to="/add-user"> Add New User</Link></li>
                        <li><Link to="/add"> Add New Product</Link></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center">

                <Link to='/' className="text-2xl font-bold px-6">
                    <span className="text-blue-700">Content Management System</span>
                </Link>

            </div>
            <div className="navbar-end">
                <a onClick={handleLogout} className="text-2xl font-bold px-6">
                    <button className="btn btn-outline text-blue-700"> Logout </button>
                </a>
            </div>
        </nav>
    </>)
}