import axios from 'axios'
import Toastify from 'toastify-js'
import { useNavigate } from 'react-router-dom'
import ProductsForm from "../components/ProductForm";



export default function AddProductPage( { url } ) {
    const navigate = useNavigate()

    async function handleSubmit(e, name, description, price, imgUrl, stock, categoryId) {
        e.preventDefault();
        try {
            const addedData = { name, description, price: +price, imgUrl, stock: +stock, categoryId: +categoryId };
            const { data } = await axios.post(`${url}/products`, addedData, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });

            Toastify({
                text: "Success add new data",
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
            navigate('/')
        } catch (error) {
            console.log(error);
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
        <ProductsForm url={url} handleSubmit={handleSubmit} nameProp="Add Product" />
        </>
    )
}

