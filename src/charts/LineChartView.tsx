import { alpha } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 9800, 3908];
const xLabels = ["Page A", "Page B", "Page C", "Page D"];

export default function LineChartView() {
  return (
    <LineChart
      width={300}
      height={150}
      series={[{ data: pData }]}
      sx={(theme) => ({
        bgcolor: alpha(theme.palette.error.main, 0.45),
        padding: 0,
      })}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
