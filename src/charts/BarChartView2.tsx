import { useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "USDT",
    value: 10,
  },
  {
    name: "BUSD",
    value: 8,
  },
  {
    name: "USDC",
    value: 5,
  },
  {
    name: "USDP",
    value: 2,
  },
  {
    name: "DAI",
    value: 3,
  },
];

export default function BarChartView2() {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Legend />
        <Bar
          dataKey="value"
          fill={theme.palette.primary.main}
          barSize={35}
          radius={3}
        >
          {data.map(({ value }, index) => (
            <Label
              display="block"
              style={{ backgroundColor: "red" }}
              position="top"
              key={index}
            >
              {value}
            </Label>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
