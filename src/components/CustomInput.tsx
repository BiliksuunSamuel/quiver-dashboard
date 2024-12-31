import {
  IconButton,
  InputBase,
  InputBaseProps,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Text } from ".";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3.5),
  },
  "&.MuiInputBase-root": {
    borderRadius: theme.spacing(0.5),
    position: "relative",
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.common.white : "#1A2027",
    border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: theme.spacing(1.65),
    padding: theme.spacing(0.35, 1.5),
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha(theme.palette.action.hover, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.action.hover,
    },
  },
}));

export interface IProps extends InputBaseProps {
  label?: string;
  height?: any;
}

export default function CustomInput({
  label,
  placeholder,
  id,
  height = "43px",
  type,
  ...others
}: IProps) {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [visible, setVisible] = useState(false);
  return (
    <FormControl sx={{ flex: 1 }} fullWidth={isMobile} variant="standard">
      {label && (
        <InputLabel
          sx={(theme) => ({
            fontWeight: 300,
            fontSize: theme.spacing(2.45),
            color: alpha(theme.palette.common.black, 0.85),
          })}
          shrink
          htmlFor={id ?? "custom-input"}
        >
          {label}
        </InputLabel>
      )}
      <BootstrapInput
        fullWidth
        id={id ?? "custom-input"}
        placeholder={placeholder}
        style={{ height, borderRadius: "6px" }}
        type={
          type === "password" && visible
            ? visible
              ? "text"
              : "password"
            : type
        }
        endAdornment={
          type === "password" ? (
            <IconButton
              sx={(theme) => ({
                borderRadius: 0.4,
                color: visible
                  ? theme.palette.error.main
                  : theme.palette.primary.main,
              })}
              onClick={() => setVisible(!visible)}
              size="small"
            >
              <Text variant="body2">{visible ? "Hide" : "Show"}</Text>
            </IconButton>
          ) : (
            others.endAdornment
          )
        }
        {...others}
      />
    </FormControl>
  );
}
