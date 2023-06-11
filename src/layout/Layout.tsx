import {Link, Outlet} from "react-router-dom";
import {LOGO_IMG} from "../constants/assets-constants";

export default function Layout() {
    return (
        <div className='bg-neutral-800 text-white min-h-screen p-2.5'>
            <Link to='/' className='flex items-center space-x-3'>
                <img src={LOGO_IMG} alt='Coffee Shop' title='Coffee Shop' className='w-14 h-14'/>
                <h1 className='text-3xl text-neutral-400 font-bold'>Coffee Shop</h1>
            </Link>
            <hr className='m-3 border-neutral-600'/>

            <Outlet/>
        </div>
    )


}