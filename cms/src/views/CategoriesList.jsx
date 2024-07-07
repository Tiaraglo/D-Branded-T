import { useEffect, useState } from "react";
import axios from 'axios'
import Toastify from 'toastify-js'

export default function CategoriesList({ url }) {

    const [categories, setCategories] = useState([]);


    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${url}/categories`, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });

            // console.log(data.categories, 'sdfghjkgfdsdfgh');
            setCategories(data.categories);
        } catch (error) {
            // console.log(error.response.data.message);
            console.log(error, 'ini eror');
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
    }, []);

    return (


        <>
            <section className="container-fluid" id="home-section">
                <div className="row">
                    <section
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                        id="product-section"
                    >
                        <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="display-2  justify-content-center ">Categories List</h1>
                        </div>
                        <div className="row">
                            <div className="col-12 table-responsive">
                                <table className="table align-middle">
                                    <thead className="text-center">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Category</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-product" className="text-center">
                                        {categories.map((e, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{e.name}</td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}