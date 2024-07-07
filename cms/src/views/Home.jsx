import axios from 'axios';
import { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import gearLoad from '../components/assets/Gear-0.2s-264px.svg'
import { Link, useNavigate } from 'react-router-dom';


export default function Home({ url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function fetchProducts() {
        try {
            setLoading(true)
            // const { data } = await axios.get(`${url}/apis/pub/branded-things/products?q=${search}&limit=8&page=1&sort=ASC`);
            const { data } = await axios.get(`${url}/products`, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });
            // console.log(data.products);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            Toastify({
                text: error.response.data.error,
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
        } finally {
            setLoading(false)
        }
    }


    async function handleDelete(id) {
        try {
            const { data } = await axios.delete(`${url}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            // console.log(data.message, 'heree');
            Toastify({
                text: data.message,
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

            fetchProducts()
            
        } catch (error) {
            console.log(error, 'disini');
            Toastify({
                text: data.message,
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
        }

    }

    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <>
            <div id="PAGE-HOME" className="p-3">

                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <div className="">
                        <table className="table h-screen">


                            <table class="table-fixed">
                                <thead>
                                    <tr >
                                        <th className="w-1/9 px-2 py-2 border px-4 text-black text-base" >Id</th>
                                        <th className="w-1/6 px-4 py-2 border px-4 text-black text-base">Name</th>
                                        <th className="w-1/4 px-4 py-2 border px-4 text-black text-base">Image</th>
                                        <th className="w-1/4 px-4 py-2 border px-4 text-black text-base">Description</th>
                                        <th className="w-1/9 px-2 py-2 border px-4 text-black text-base">Price</th>
                                        <th className="w-1/10 px-2 py-2 border px-4 text-black text-base">ImageUrl</th>
                                        <th className="w-1/8 px-2 py-2 border px-4 text-black text-base">Stock</th>
                                        <th className="w-1/10 px-4 py-2 border px-4 text-black text-base">AuthorId</th>
                                        <th className="w-1/7 px-4 py-2 border px-4 text-black text-base">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td className="border px-4 py-2">{product.id}</td>
                                                <td className="border px-4 py-2">{product.name}</td>
                                                <td className="border px-4 py-2"><img src={product.imgUrl} /></td>
                                                <td className="border px-4 py-2">{product.description}</td>
                                                <td className="border px-2 py-2">Rp.{product.price}</td>
                                                <td className="border px-2 py-2"><Link><button className="btn btn-error btn-sm" > Edit Image <i class="fa-solid fa-pen-to-square"></i></button></Link></td>
                                                <td className="border px-2 py-2">{product.stock}</td>
                                                <td className="border px-4 py-2">{product.authorId}</td>
                                                <td><button onClick={() => navigate(`/edit/${product.id}`)} className="btn btn-warning btn-sm ">Edit</button>
                                                    <button onClick={() => handleDelete(product.id)} className="btn btn-error btn-sm">Delete</button>
                                                    <button onClick={() => navigate(`/detail/${product.id}`)} className="btn btn-info btn-sm">Detail</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                        </table>
                    </div>
                )}
            </div >
        </>
    )
}