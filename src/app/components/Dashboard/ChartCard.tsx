import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] },]}
            series={[
                {
                    data: [30, 40, 24, 46, 20, 45],
                },
                {
                    data: [50, 64, 48, 66, 49, 65]
                }
            ]}
            width={500}
            height={300}
        />
    );
}