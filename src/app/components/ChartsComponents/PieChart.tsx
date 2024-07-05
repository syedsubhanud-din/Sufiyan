import { PieChart } from '@mui/x-charts/PieChart';

const data1 = [
    { label: 'Your Files', value: 63 },
    { label: 'System', value: 25 },
    { label: 'Empty', value: 12 },
];

export default function PieChartComponent() {
    return (
        <PieChart
            series={[
                {
                    outerRadius: 80,
                    data: data1,
                },
            ]}
            height={300}
            slotProps={{
                legend: { hidden: true },
            }}
        />
    );
}