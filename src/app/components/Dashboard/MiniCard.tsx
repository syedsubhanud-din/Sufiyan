'use client'

import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';


type Person = {
    title: string,
    icons: string,
    details: string
    type: string,
    text?: string,
    sales?: string
}[]

const CardData: Person = [
    {
        title: "Earnings",
        icons: "BarChartIcon",
        details: "$350.4",
        type: 'left'
    },
    {
        title: "Spend this month",
        icons: "AttachMoneyIcon",
        details: "$642.39",
        type: 'left'
    },
    {
        title: "Sales",
        icons: "TaskAltIcon",
        details: "$574.34",
        type: 'normal',
        text: 'since last month',
        sales: '+23%'
    },
    {
        title: "Your Balance",
        icons: "TaskAltIcon",
        details: "$1000",
        type: 'right'
    },
    {
        title: "New Task",
        icons: "FileCopyIcon",
        details: "154",
        type: 'left'
    },
    {
        title: "Total Projects",
        icons: "TaskAltIcon",
        details: "2935",
        type: 'left'
    },
]

export default function MiniCard() {
    return (
        <>
            <div className="w-full p-2 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 h-fit 2xl:grid-cols-6 gap-5 mt-28">
                {
                    CardData.map((card) => (
                        card.type === 'left' ? (
                            <div className="p-4 flex items-center gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                    <BarChartIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
                                </div>
                                <div>
                                    <div className='text-gray-400 text-xs'>{card.title}</div>
                                    <div className='text-2xl font-bold'>{card.details}</div>
                                </div>
                            </div>
                        ) : card.type === 'right' ? (
                            <div className="p-4 flex items-center flex-row-reverse justify-between gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                    <AttachMoneyIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
                                </div>
                                <div>
                                    <div className='text-gray-400 text-xs tracking-wider'>{card.title}</div>
                                    <div className='text-2xl font-bold'>{card.details}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-4 rounded-3xl h-[6.5rem] w-full bg-white flex flex-col gap-1">
                                <div className="text-gray-400 text-xs tracking-wider">{card.title}</div>
                                <div className='text-2xl font-bold'>{card.details}</div>
                                <div className='text-gray-400 text-xs tracking-wider'><span className='text-green-600'>{card.sales}</span> {card.text}</div>
                            </div >
                        )
                    ))
                }
            </div>
        </>
    )
};



const CardComponentLeft = () => {
    return (

        <div className="p-4 flex items-center gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <BarChartIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
            </div>
            <div className='font-bold'>
                <div className='text-gray-400 text-sm'>Earnings</div>
                <div className='text-2xl'>$350.4</div>
            </div>
        </div>
    )
}

const CardComponentRight = () => {
    return (
        <div className="p-4 flex items-center flex-row-reverse justify-between gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <BarChartIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
            </div>
            <div className='font-bold'>
                <div className='text-gray-400 text-xs tracking-wider'>Earnings</div>
                <div className='text-2xl'>$350.4</div>
            </div>
        </div>
    )
}

const CardComponentNormal = () => {
    return (
        <div className="p-4 rounded-3xl h-[6.5rem] w-full bg-white flex flex-col gap-1">
            <div className="text-gray-400 text-xs tracking-wider">Sales</div>
            <div className='text-2xl font-bold'>$350.4</div>
            <div className='text-gray-400 text-xs tracking-wider'><span className='text-green-600'>23%</span> since last month</div>
        </div >
    )
}