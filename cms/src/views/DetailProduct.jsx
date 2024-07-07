import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Toastify from 'toastify-js'

export default function Detail({ url }) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    async function fetchProduct() {
        try {
            const {data} = await axios.get(`${url}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setProduct(data.products)
            // console.log(data.products);
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
        } catch (error) {
            console.log(error, "eror disini");
            Toastify({
                text: error.message,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
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

    return (
        <>
            <main className="px-10 my-8">
                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <div className="flex flex-col bg-base-100 my-6 items-center p-20  bg-gray-100 shadow">
                        <img
                            src={product.imgUrl}
                            className="max-w-sm rounded-lg shadow mb-5"
                        />
                        <div className="flex-col">
                            <div>
                                <div className="texts">
                                    <h1 className="text-5xl font-bold text-accent-focus">{product.name}</h1>
                                    <div className="py-6">
                                        <p>{product.description}</p>
                                        <br></br>
                                        <p>Stock: {product.stock}</p>
                                        <p>Price: {product.price}</p>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <Link to="/"><button className="btn btn-accent">Back</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}