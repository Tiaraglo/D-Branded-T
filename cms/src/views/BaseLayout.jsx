import { Outlet } from "react-router-dom"
// import Nav from "../components/Nav"
import Nav from '../components/Nav'

export default function BaseLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}