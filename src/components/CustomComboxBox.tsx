import * as React from "react";
import { useTheme, styled, alpha } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, {
  AutocompleteCloseReason,
  autocompleteClasses,
} from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { ArrowDown2 } from "iconsax-react";
import { PrimaryShades } from "../theme/AppColors";
import { IconButton, Stack, StackProps } from "@mui/material";
import { Row, Text } from ".";
import { IoMdClose } from "react-icons/io";

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.common.black, 0.085)}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
  borderRadius: 6,
  minWidth: 240,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "red",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid ${
    theme.palette.mode === "light" ? "#eaecef" : "#30363d"
  }`,
  "& input": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid ${
      theme.palette.mode === "light" ? "#eaecef" : "#30363d"
    }`,
    fontSize: 14,
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === "light"
          ? "rgba(3, 102, 214, 0.3)"
          : "rgb(12, 45, 107)"
      }`,
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
    },
  },
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 14,
  width: "100%",
  textAlign: "left",
  paddingBottom: 8,
  color: alpha(theme.palette.common.black, 0.65),
  fontWeight: 600,
  "&:hover,&:focus": {
    color: PrimaryShades[500],
  },
  "& span": {
    width: "100%",
  },
  "& svg": {
    width: 16,
    height: 16,
  },
  border: `1px solid ${alpha(theme.palette.common.black, 0.5)}`,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

interface IProps extends StackProps {
  label?: string;
  placeholder?: string;
}

export default function CustomComboBox({
  label,
  placeholder,
  ...others
}: IProps) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<LabelType[]>([]);
  const [pendingValue, setPendingValue] = React.useState<LabelType[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <Stack {...others}>
      {label && (
        <Text color={alpha(theme.palette.common.black, 0.65)}>{label}</Text>
      )}
      <Box sx={{ width: "100%", fontSize: 13 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <span></span>
          <ArrowDown2 size={24} />
        </Button>
        {value.map((_, index) => (
          <Stack
            key={index}
            sx={{
              marginY: theme.spacing(0.5),
              border: `1px solid ${alpha(theme.palette.common.black, 0.085)}`,
              borderRadius: theme.spacing(0.5),
              padding: theme.spacing(1),
            }}
          >
            <Row justifyContent="space-between">
              <Text color={alpha(theme.palette.common.black, 0.65)}>
                sameple data
              </Text>
              <IconButton size="small">
                <IoMdClose />
              </IconButton>
            </Row>
          </Stack>
        ))}
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === "light" ? "#eaecef" : "#30363d"
                }`,
                padding: "8px 10px",
                fontWeight: 600,
              }}
            >
              {placeholder}
            </Box>
            <Autocomplete
              open
              multiple
              onClose={(
                _: React.ChangeEvent<{}>,
                reason: AutocompleteCloseReason
              ) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === "keydown" &&
                  ((event as React.KeyboardEvent).key === "Backspace" ||
                    (event as React.KeyboardEvent).key === "Delete") &&
                  reason === "removeOption"
                ) {
                  return;
                }
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No selection"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={DoneIcon}
                    sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      borderRadius: "3px",
                      mr: 1,
                      mt: "2px",
                    }}
                    style={{ backgroundColor: option.color }}
                  />
                  <Box
                    sx={{
                      flexGrow: 1,
                      "& span": {
                        color:
                          theme.palette.mode === "light"
                            ? "#586069"
                            : "#8b949e",
                      },
                    }}
                  >
                    {option.name}
                    <br />
                    <span>{option.description}</span>
                  </Box>
                  <Box
                    component={CloseIcon}
                    sx={{ opacity: 0.6, width: 18, height: 18 }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                </li>
              )}
              options={[...labels].sort((a, b) => {
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder={placeholder ?? "Search here"}
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </Stack>
  );
}

interface LabelType {
  name: string;
  color: string;
  description?: string;
}

const labels: LabelType[] = [];
