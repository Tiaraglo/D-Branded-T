import { useState } from 'react'
import './App.css'
import router from './routers'
import { RouterProvider } from 'react-router-dom'


export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}