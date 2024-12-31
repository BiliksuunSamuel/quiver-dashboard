import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartView() {
  const theme = useTheme();
  return (
    <BarChart
      xAxis={[
        { scaleType: "band", data: ["USDT", "BUSD", "USDC", "USDP", "DAI"] },
      ]}
      series={[{ data: [10, 8, 5, 2, 3] }]}
      height={300}
      colors={[theme.palette.primary.main]}
      yAxis={[{ data: ["1yr", "9mth", "6mth", "3mth"] }]}
    />
  );
}
