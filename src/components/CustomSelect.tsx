import { InputLabel, Select, SelectProps, Stack, alpha } from "@mui/material";
import { ArrowDown2 } from "iconsax-react";

interface IProps extends SelectProps<{}, "outlined"> {
  label?: string;
}

export default function CustomSelect({ label, children, ...props }: IProps) {
  return (
    <Stack>
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 500,
            fontSize: theme.spacing(2.45),
            marginBottom: theme.spacing(0.05),
            fontFamily: "Arial",
            color: alpha(theme.palette.common.black, 0.65),
          })}
          shrink
        >
          {label}
        </InputLabel>
      )}
      <Select
        size="small"
        IconComponent={(props) => (
          <ArrowDown2 {...props} style={{ marginTop: "-5px" }} />
        )}
        sx={(theme) => ({
          "&.MuiInputBase-root": {
            color: theme.palette.primary.main,
            position: "relative",
            fontSize: theme.spacing(2),
            borderRadius: "25px",
            width: "100%",
            borderStyle: "none",
            boxShadow: "none",
            height: "40px",
            padding: theme.spacing(0.5),
            transition: theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow",
            ]),
          },
          borderStyle: "none",
          boxShadow: "none",
        })}
        {...props}
      >
        {children}
      </Select>
    </Stack>
  );
}
