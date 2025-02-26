import { useEffect, useState } from "react";
import axios from 'axios';
import Toastify from 'toastify-js'
import { useNavigate } from "react-router-dom";

export default function ProductsForm({ url, handleSubmit, nameProp, product }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [categories, setCategories] = useState([]);
    // const navigate = useNavigate()

    useEffect(() => {
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.price)
            setImgUrl(product.imgUrl)
            setStock(product.stock)
            setCategoryId(product.categoryId)
        }
    }, [product])

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${url}/categories`, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });

            // console.log(data.categories, 'sdfghjkgfdsdfgh');
            setCategories(data.categories);
        } catch (error) {
            // console.log(error.response.data.message);
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


    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e, name, description, price, imgUrl, stock, categoryId)}>
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-primary"
                            value={name}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Description</span>
                        </label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Enter Description"
                            className="w-full input input-bordered input-primary"
                            value={description}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Price</span>
                        </label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Enter Price"
                            className="w-full input input-bordered input-primary"
                            value={price}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Stock</span>
                        </label>
                        <input
                            onChange={(e) => setStock(e.target.value)}
                            type="number"
                            placeholder="Enter Stock"
                            className="w-full input input-bordered input-primary"
                            value={stock}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Image (URL)</span>
                        </label>
                        <input
                            onChange={(e) => setImgUrl(e.target.value)}
                            type="text"
                            placeholder="Image URL"
                            className="w-full input input-bordered input-primary"
                            value={imgUrl}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Category</span>
                        </label>
                        <select
                            className="w-full input input-bordered input-primary"
                            onChange={(e) => setCategoryId(e.target.value)}
                            name="category"
                            id=""
                        >
                            {categories.map(c => {
                                return <option key={c.id} value={c.id}>{c.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-accent mt-10 w-full">{nameProp}</button>
                </div>
            </form>
        </>
    )
}