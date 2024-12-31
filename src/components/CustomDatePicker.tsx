import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import {
  FilledTextFieldProps,
  InputLabel,
  OutlinedTextFieldProps,
  Stack,
  StandardTextFieldProps,
  TextFieldVariants,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { SlotComponentProps } from "@mui/base";

interface IProps extends DatePickerProps<""> {
  label?: string;
  textFieldProps?:
    | SlotComponentProps<
        <Variant extends TextFieldVariants>(
          props: {
            variant?: Variant | undefined;
          } & Omit<
            | FilledTextFieldProps
            | OutlinedTextFieldProps
            | StandardTextFieldProps,
            "variant"
          >
        ) => JSX.Element,
        {},
        Record<any, any>
      >
    | undefined;
}
export default function CustomDatePicker({
  textFieldProps,
  label,
  ...others
}: IProps) {
  const isMobileDevice = useMediaQuery(useTheme().breakpoints.down("sm"));
  return isMobileDevice ? (
    <Stack flex={1}>
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(3),
            marginBottom: theme.spacing(1.5),
          })}
          shrink
        >
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          slotProps={{ textField: textFieldProps && { size: "small" } }}
          format="DD/MM/YYYY"
        />
      </LocalizationProvider>
    </Stack>
  ) : (
    <Stack flex={1}>
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2.5),
            marginBottom: theme.spacing(0.5),
            color: alpha(theme.palette.common.black, 0.55),
          })}
          shrink
        >
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format="DD/MM/YYYY"
          views={["day", "month", "year"]}
          slotProps={{
            textField: textFieldProps && {
              style: { height: "60px" },
            },
          }}
          {...others}
        />
      </LocalizationProvider>
    </Stack>
  );
}
