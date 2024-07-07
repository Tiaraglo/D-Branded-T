import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import BaseLayout from "../views/BaseLayout";
import Login from '../views/Login'
import Toastify from 'toastify-js'
import AddProductPage from "../views/AddProductPage";
import EditProductPage from "../views/EditProductPage";
import AddUserPage from "../views/AddUserPage";
import CategoriesList from "../views/CategoriesList";
import DetailProduct from "../views/DetailProduct";
import EditImg from "../views/EditImg";





const url = 'https://server.yoelk20.tech'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login url={url} />,
        loader: () => {
            if (localStorage.access_token) {
                Toastify({
                    text: "You already logged in",
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
                return redirect('/')
            }

            return null
        }
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Toastify({
                    text: "Please log in first",
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
                return redirect('/login')
            }

            return null
        },
        children: [
            {
                path: '/',
                element: <Home url={url} />
            },
            {
                path: '/add',
                element: <AddProductPage url={url} />
            },
            {
                path: '/edit/:id',
                element: <EditProductPage url={url} />
            },
            {
                path: '/detail/:id',
                element: <DetailProduct url={url} />
            },
            {
                path: '/editImg/:id',
                element: <EditImg url={url} />
            },
            {
                path: '/add-user',
                element: <AddUserPage url={url} />
            },
            {
                path: '/categories',
                element: <CategoriesList url={url} />
            }

        ]
    }
])

export default router