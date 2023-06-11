import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Layout from "./layout/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>} errorElement={<ErrorPage/>}>
            <Route index lazy={() => import('./routes/HomeRoute')}/>
            <Route path='/products' lazy={() => import('./routes/ProductSearchRoute')}/>
            <Route path='/products/:productId' lazy={() => import('./routes/ProductIndividualRoute')}/>
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
