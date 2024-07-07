import { useState } from 'react'
import './App.css'
import router from './routers'
import { RouterProvider } from 'react-router-dom'



// export default function App() {
//     const url = 'https://phase2-aio.vercel.app'
//     const [page, setPage] = useState('home')

//     return (
//         <>
//             <Nav setPage={setPage} />
//             <br />
//             <HomePage url={url} />
//         </>
//     )
// }

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}