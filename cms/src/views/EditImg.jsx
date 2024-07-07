import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import Toastify from 'toastify-js'


export default function EditImg({ url }) {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [file, setFile] = useState(null);
    const { id } = useParams();

    console.log(url, 'ini url');

    async function fetchImg() {
        try {

            const data = await axios.get(`${url}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            // console.log(data.data.products.imgUrl, 'ini img');
            setImage(data.data.products.imgUrl)
        } catch (error) {
            console.log(error, 'ini errornysa');

        }
    }

    async function uploadImg(e) {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('imgUrl', image)

            const data = await axios.patch(`${url}/products/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                    "Content-Type": "multipart/form-data",
                }
            })

            Toastify({
                text: `sukses update img for ${id}`,
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
                text: `fail to update img ${id}`,
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
        fetchImg();
    }, []);


    return (

        <>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1>Update Image</h1>
                <img
                    src={image}
                    style={{ width: 250, height: "100%" }}
                    alt="The Branded Thing "
                />
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        color: "white",
                    }}
                    onSubmit={uploadImg}
                >
                    <label htmlFor="formFile" className="form-label">
                        Select file:
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="form-control"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: 100 }}
                    >
                        Upload
                    </button>
                </form>
            </div>
        </>
    )
}