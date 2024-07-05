import BarChartComponent from "@/app/components/ChartsComponents/BarChart";
// import LineChartComponent from '../ChartsComponents/LineChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import Bar from "@/app/components/ChartsComponents/BarChart";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Line from "../ChartsComponents/LineChart";

export default function ChartCardComponent() {
    return (
        <>
            {/* Left Card Line Chart Section */}
            <div className="p-2 grid grid-cols-1 place-items-center h-fit gap-5 md:grid-cols-2">
                <div className="bg-white w-full p-6 rounded-2xl"> {/*Divide into 2 Upper And Lower*/}
                    {/* Upper sub divided into two left and right */}
                    <div className="flex justify-between p-2 mb-4">
                        {/* Left */}
                        <div className="flex items-center rounded-lg gap-2 p-2 text-gray-400 bg-[#f4f7fe]">
                            <CalendarTodayOutlinedIcon />
                            <span>This Month</span>
                        </div>
                        {/* Right */}
                        <div className="flex items-center rounded-lg gap-2 p-2 text-[#422afb] bg-[#f4f7fe]">
                            <BarChartIcon />
                        </div>
                    </div>
                    {/* Lower Divided into two left and right */}
                    <div className="flex items-center justify-between gap-4">
                        {/* Left */}
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
                        {/* Right Line Chart */}
                        <div>
                            <Line />
                        </div>
                    </div>
                </div>

                {/* <BarChartComponent /> */}
                {/* Right Card Bar Chart Section */}
                <div className="bg-white h-full w-full p-6 rounded-2xl"> {/* Divide into two upper and lower */}
                    {/* Upper sub divided into Left and Right */}
                    {/* Left */}
                    <div className="flex justify-between">
                        <div className="flex items-center rounded-lg gap-2 p-2 text-xl font-bold">
                            Weekly Revenue
                        </div>
                        <div className="flex items-center rounded-lg gap-2 p-2 text-[#422afb] bg-[#f4f7fe]">
                            <BarChartIcon />
                        </div>
                    </div>
                    <div>
                        <Bar />
                    </div>
                </div>

            </div>
        </>
    )
};