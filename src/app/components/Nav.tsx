"use client"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link';


const Nav = () => {
    return (
        <nav className="w-[22rem] h-screen bg-white pt-6 px-4 flex flex-col items-center max-lg:hidden">
            <h1 className="text-2xl font-extrabold my-8">HORIZON <span className="font-normal">FREE</span></h1>
            <div className="border-gray-400 border-[1px] mb-5 w-full"></div>
            <ul className="flex flex-col text-gray-400 gap-y-5 p-4">
                <Link href="/admin/default" className="w-full"><HomeIcon className='mr-3' /> Main Dashboard</Link>
                <Link href="/admin/nft-marketplace" className="w-full"><ShoppingCartOutlinedIcon className='mr-3' /> NFT Marketplace</Link>
                <Link href="/admin/data-tables" className="w-full"><BarChartOutlinedIcon className='mr-3' /> Data Tables</Link>
                <Link href="/admin/profile" className="w-full"><PersonIcon className='mr-3' /> Profile</Link>
                <Link href="/auth/sign-in" className="w-full"><LockIcon className='mr-3' /> Sign In</Link>
                <Link href="/rtl/rtl-admin" className="w-full"><HomeIcon className='mr-3' /> RTL Admin</Link>
            </ul>
        </nav>
    )
}

export default Nav