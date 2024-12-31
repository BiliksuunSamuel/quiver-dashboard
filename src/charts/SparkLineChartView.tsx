import { Stack, StackProps, alpha } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

interface IProps extends StackProps {
  color: any;
}
export default function SparkLineChartView({ color, ...others }: IProps) {
  return (
    <Stack
      minWidth="100px"
      bgcolor={alpha(color, 0.05)}
      height="40px"
      {...others}
    >
      <SparkLineChart
        colors={[color]}
        data={[1, 4, 2, 5, 7, 2, 8, 9, 6]}
        height={100}
      />
    </Stack>
  );
}
