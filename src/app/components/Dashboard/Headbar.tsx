import Link from "next/link"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function Headbar() {
    return (
        <>
            <div className="p-4 flex justify-between items-center w-full bg-[#f4f7fe] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
                <div>
                    <div>
                        <Link href="/admin/default">Pages</Link>
                        <span>/</span>
                        <Link href="/admin/default">Main Dashboard</Link>
                    </div>
                    <div className="text-4xl font-bold">Main Dashboard</div>
                </div>
                <div className="rounded-full text-gray-400 p-2 flex items-center gap-2 bg-white shadow-lg">
                    <div className="bg-[#f3f7fe] p-2 rounded-full">
                        <SearchIcon className="mr-2" />
                        <input type="text" className="outline-none bg-inherit" />
                    </div>
                    <MenuOutlinedIcon className="hidden max-lg:block" />
                    <NotificationsNoneOutlinedIcon />
                    <ErrorOutlineIcon />
                    <ColorLensIcon />
                </div>
            </div>
        </>
    )
};