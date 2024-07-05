'use client'

import Headbar from "@/app/components/Dashboard/Headbar"
import MiniCard from "@/app/components/Dashboard/MiniCard"
import Nav from "@/app/components/Nav"
import ChartCardComponent from "@/app/components/Dashboard/ChartCard"
import CheckTableComponent from "@/app/components/TableComponents/CheckTable"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PieChartComponent from "@/app/components/ChartsComponents/PieChart"
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BarChartComponent from "@/app/components/ChartsComponents/BarChart"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Dashboard() {
    return (
        <>
            <div className="flex w-full h-full bg-[#f4f7fe] font-sans">
                <Nav />
                <div className="w-full p-4">
                    <Headbar />
                    <MiniCard />
                    <ChartCardComponent />
                    {/* Divided into two Left and Right */}
                    <div className="p-2 grid grid-cols-1 place-items-center h-fit gap-5 md:grid-cols-2">
                        {/* Left Section is Sub divided into two upper and lower */}
                        <div className="bg-white h-full w-full p-6 rounded-2xl">
                            {/* Left */}
                            <div className="flex justify-between pb-2 mb-2">
                                <div className="flex items-center rounded-lg gap-2 p-2 text-xl font-bold">
                                    Check Table
                                </div>
                                <div className="flex items-center rounded-lg gap-2 px-2 text-[#422afb] bg-[#f4f7fe]">
                                    <MoreHorizOutlinedIcon />
                                </div>
                            </div>
                            <div>
                                <CheckTableComponent />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full grid grid-cols-1 place-items-center h-full gap-5 md:grid-cols-2">
                            {/* Left */}
                            <div className="bg-white h-full w-full p-8 flex flex-col justify-between rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex items-end gap-1">
                                        <div>
                                            <span className="text-gray-400">Daily Trafic</span>
                                            <h2 className="text-3xl font-bold">2.579</h2>
                                        </div>
                                        <span className="text-gray-400">Visitors</span>
                                    </div>
                                    <p className="mb-6 p-2">
                                        <span className="text-green-600 ml-2 font-bold">
                                            <ArrowDropUpOutlinedIcon />
                                            +2.45%
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <BarChartComponent />
                                </div>
                            </div>

                            {/* Right */}
                            <div className="bg-white h-full w-full p-8 rounded-2xl">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-bold">Your Pie Chart</h2>
                                    <p>
                                        Monthly
                                        <KeyboardArrowDownOutlinedIcon />
                                    </p>
                                </div>
                                <PieChartComponent />
                                <div className="p-4 shadow-xl rounded-xl flex items-center justify-between">
                                    <div>
                                        <div>
                                            <FiberManualRecordIcon className="text-[#422afb]" style={{ fontSize: 16 }} />
                                            <span>Your Files</span>
                                        </div>
                                        <div>63%</div>
                                    </div>
                                    <div className="text-5xl font-extralight">|</div>
                                    <div>
                                        <div>
                                            <FiberManualRecordIcon className="text-[#6ad2ff]" style={{ fontSize: 16 }} />
                                            <span>System</span>
                                        </div>
                                        <div>25%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};