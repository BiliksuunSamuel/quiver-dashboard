import { Stack, StackProps, alpha, useTheme } from "@mui/material";
import { ILoanRequestStatistics } from "../../interface";
import { Row, Text } from "../../components";

interface IProps extends StackProps {
  info: ILoanRequestStatistics;
}
export default function LoanRequestStatisticsCard({ info, ...others }: IProps) {
  const theme = useTheme();
  return (
    <Stack width="100%" {...others}>
      <Row spacing={3} width="100%" justifyContent="space-evenly">
        <Stack alignItems="flex-start">
          <Text color={alpha(theme.palette.common.black, 0.65)}>
            {info.title}
          </Text>
          <Text fontSize={theme.spacing(2.85)} fontWeight="bold">
            ${info.amount}
          </Text>
        </Stack>
        <Stack
          borderRight={`2px solid ${alpha(theme.palette.common.black, 0.25)}`}
          height="60px"
        />
        <Stack>
          <Text color={alpha(theme.palette.common.black, 0.65)}>
            {info.label}
          </Text>
          <Text fontSize={theme.spacing(2.85)} fontWeight="bold">
            {info.request}
          </Text>
        </Stack>
      </Row>
    </Stack>
  );
}
