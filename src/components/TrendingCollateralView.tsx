import {
  Stack,
  TableCell,
  TableRow,
  TableRowProps,
  useTheme,
} from "@mui/material";
import { ITrendingCollateral } from "../interface";
import { Column, Row, Text } from ".";
import { SparkLineChart } from "../charts";
import { ArrowDown, ArrowUp } from "iconsax-react";
import { TitleTextShades } from "../theme/AppColors";

interface IProps extends TableRowProps {
  info: ITrendingCollateral;
}
export default function TrendingCollateralView({ info, ...others }: IProps) {
  const theme = useTheme();
  return (
    <TableRow {...others}>
      <TableCell>
        <Row justifyContent="flex-start" spacing={1}>
          <Stack width="35px" height="35px">
            <img src={info.icon} alt="bitcoin" />
          </Stack>
          <Column color={TitleTextShades[500]}>
            <Text fontSize="14px">{info.category}</Text>
            <Text style={{ marginTop: -3 }} fontWeight="bold">
              {info.title}
            </Text>
          </Column>
        </Row>
      </TableCell>
      <TableCell>
        <Column alignItems="center">
          <Text color="#828282" fontSize={theme.spacing(1.85)}>
            Times today
          </Text>
          <Text fontWeight="bold" variant="body2">
            {info.count}
          </Text>
        </Column>
      </TableCell>
      <TableCell>
        <Column alignItems="center">
          <Text color="#828282" fontSize={theme.spacing(1.85)}>
            Rate
          </Text>
          <Row color={theme.palette.error.main}>
            {info.rateDirection === "down" ? (
              <ArrowDown size="12" />
            ) : (
              <ArrowUp size="12" />
            )}
            <Text variant="caption">{`${info.rate}%`}</Text>
          </Row>
        </Column>
      </TableCell>
      <TableCell colSpan={2}>
        <Column maxWidth="300px" minHeight="50px">
          <SparkLineChart color={info.color} />
        </Column>
      </TableCell>
    </TableRow>
  );
}
