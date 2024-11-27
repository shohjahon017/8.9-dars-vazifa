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

const data = [
  { date: "12.06", value: 20 },
  { date: "18.06", value: 40 },
  { date: "03.07", value: 75 },
  { date: "13.07", value: 10 },
  { date: "14.07", value: 50 },
  { date: "20.07", value: 30 },
  { date: "24.07", value: 70 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="tone" dataKey="value" stroke="blue" dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

const ChartLineProg = () => {
  return (
    <div>
      <LineChartComponent />
    </div>
  );
};

export default ChartLineProg;
