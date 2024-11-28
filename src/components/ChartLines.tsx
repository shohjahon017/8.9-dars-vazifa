import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  date: string;
  value: number;
}
const data: ChartData[] = [
  { date: "12.06", value: 20 },
  { date: "18.06", value: 40 },
  { date: "03.07", value: 75 },
  { date: "13.07", value: 10 },
  { date: "14.07", value: 50 },
  { date: "20.07", value: 30 },
  { date: "24.07", value: 70 },
];

const LineChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="blue" dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

const ChartLineProg: React.FC = () => {
  return (
    <div>
      <LineChartComponent />
    </div>
  );
};

export default ChartLineProg;
