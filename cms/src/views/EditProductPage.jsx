import ProductsForm from "../components/ProductForm";
import axios from 'axios'
import Toastify from 'toastify-js'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditProductPage({ url }) {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams()
    
    
    async function fetchProduct() {
        try {
            // axios.get(`${url}/products/${id}`
            const { data } = await axios.get(`${url}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            // console.log(data, 'dataaaaa');
            setProduct(data.products)
        } catch (error) {
            console.log(error, 'error 24')

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

    useEffect(() => {
        fetchProduct()
    }, [])

    async function handleSubmit(e, name, description, price, imgUrl, stock, categoryId) {
        e.preventDefault()
        try {
            const dataAdded = { name, description, price: +price, imgUrl, stock: +stock, categoryId: +categoryId }

            await axios.put(`${url}/products/${id}`, dataAdded, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            Toastify({
                text: "Success edit product",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#00B29F",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();

            navigate('/')

        } catch (error) {
            console.log(error, 'error 77');
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
            <ProductsForm url={url} handleSubmit={handleSubmit} product={product} nameProp="Edit Product" />
        </>
    )
}