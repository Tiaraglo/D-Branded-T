import { useNavigate } from "react-router-dom"
import Detail from "../views/Detail"



export default function Card({ product }) {

const navigate = useNavigate()

    return (<>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-2 mt-2 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                    src={product.imgUrl}
                    alt="card-image" class="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-blue-700">
                        <b>Rp.{product.price}</b>
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-blue-700">
                        <b> Stock Available : {product.stock}</b>
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    <b>{product.name}</b>
                </p>
            </div>
            <div className="p-6 pt-0">
                <button onClick={() => navigate(`/public/products/${product.id}`) }
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-blue-700"
                    type="button">
                    <b>Detail</b>
                </button>
            </div>
        </div>
    </>)
}