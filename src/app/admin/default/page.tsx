'use client'

import Headbar from "@/app/components/Dashboard/Headbar"
import MiniCard from "@/app/components/Dashboard/MiniCard"
import Nav from "@/app/components/Nav"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import BasicLineChart from "@/app/components/Dashboard/ChartCard";

export default function Dashboard() {
    return (
        <>
            <div className="flex w-full h-full bg-[#f4f7fe] font-sans">
                <Nav />
                <div className="w-full p-4">
                    <Headbar />
                    <MiniCard />
                    <div className="p-4 grid grid-cols-1 place-items-center gap-5 md:grid-cols-2">
                        <div className="bg-white w-full p-6 rounded-2xl">
                            <div className="flex justify-between p-2 mb-4">
                                <div className="flex items-center rounded-lg gap-2 p-2 text-gray-400 bg-[#f4f7fe]">
                                    <CalendarTodayOutlinedIcon />
                                    <span>This Month</span>
                                </div>
                                <div className="flex items-center rounded-lg gap-2 p-2 text-[#422afb] bg-[#f4f7fe]">
                                    <BarChartIcon />
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-3xl font-bold">$37.5K</h2>
                                    <p className="mb-6 p-2">
                                        <span className="text-gray-400">Total Spent</span>
                                        <span className="text-green-600 ml-2 font-bold">
                                            <ArrowDropUpOutlinedIcon />
                                            +2.45%
                                        </span>
                                    </p>
                                    <p className="text-lg flex items-center text-green-600 ">
                                        <CheckCircleIcon style={{ fontSize: 18 }} className="mr-2" />
                                        On track
                                    </p>
                                </div>
                                <div>
                                    <BasicLineChart />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full p-6 rounded-2xl">
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex items-center rounded-lg gap-2 p-2 text-xl font-bold">
                                        Weekly Revenue
                                    </div>
                                    <div className="flex items-center rounded-lg gap-2 p-2 text-[#422afb] bg-[#f4f7fe]">
                                        <BarChartIcon />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};