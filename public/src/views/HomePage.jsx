import Card from "../components/Card";
import axios from 'axios';
import Toastify from 'toastify-js'
import { useEffect, useState } from "react";
import gearLoad from '../components/assets/Gear-0.2s-264px.svg'
import Paging from "../components/Paging";





export default function HomePage({ url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')


    async function fetchProducts() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${url}/public/products?search=${search}`);
            // console.log(data.data, 'ini data public');
            setProducts(data.data);

        } catch (error) {
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

    useEffect(() => {
        fetchProducts();
    }, [search])


    return (
        <>
            <div id="PAGE-HOME" className="pt-20 bg-sky-600" >

                {/* search */}
                <form action="" method="get" className="flex justify-end items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input w-24 md:w-auto mx-1 input-sm"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <div className=" bg-blue">
                        <main className="grid grid-cols-3 gap-2 px-10 my-8 ml-20">
                            {products.map(product => {
                                return <Card key={product.id} product={product} />
                            })}
                        </main>
                    </div>
                )}

                <div className="flex justify-centre w-screen">
                    <Paging />
                </div>
            </div >
        </>
    )
}