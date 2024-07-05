import { BarChart } from '@mui/x-charts/BarChart';
import BarChartIcon from '@mui/icons-material/BarChart';

const Bar = () => {
    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: [17, 18, 19, 20, 21, 22, 23, 24, 25] }]}
            series={[{ data: [4, 3, 5, 6, 2, 5, 8, 6, 9], stack: 'total' }, { data: [4, 3, 5, 6, 2, 5, 8, 6, 9], stack: 'total' }]}
            // width={ }
            height={300}
        />
    );
}

// export default function BarChartComponent() {
//     return (
//         <>
//             <div className="bg-white h-full w-full p-6 rounded-2xl"> {/* Divide into two upper and lower */}
//                 {/* Upper sub divided into Left and Right */}
//                 {/* Left */}
//                 <div className="flex justify-between">
//                     <div className="flex items-center rounded-lg gap-2 p-2 text-xl font-bold">
//                         Weekly Revenue
//                     </div>
//                     <div className="flex items-center rounded-lg gap-2 p-2 text-[#422afb] bg-[#f4f7fe]">
//                         <BarChartIcon />
//                     </div>
//                 </div>
//                 <div>
//                     <Bar />
//                 </div>
//             </div>
//         </>
//     )
// };

export default Bar