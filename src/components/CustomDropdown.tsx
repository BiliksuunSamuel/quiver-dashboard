import * as React from "react";
import {
  Select as BaseSelect,
  selectClasses,
  SelectListboxSlotProps,
  SelectProps,
  SelectRootSlotProps,
} from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import { colors } from "@mui/material";
import { ArrowDown2 } from "iconsax-react";

interface IProps {
  style?: any;
  placeholder?: string;
}
export default function CustomDropdown({ placeholder }: IProps) {
  return (
    <Select defaultValue={placeholder}>
      <Option value={placeholder}>{placeholder}</Option>
    </Select>
  );
}

const Select = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots,
  };

  return (
    <BaseSelect style={{ width: "50px" }} {...props} ref={ref} slots={slots} />
  );
});

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <ArrowDown2 size="24px" />
    </button>
  );
});

const StyledButton = styled(Button, {
  shouldForwardProp: () => true,
})(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 120px;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? colors.grey[900] : "#fff"};
  border: 1px solid ${
    theme.palette.mode === "dark" ? colors.grey[700] : colors.grey[400]
  };
  color: ${theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[900]};
  position: relative;
 

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${
      theme.palette.mode === "dark" ? colors.grey[800] : colors.grey[50]
    };
    border-color: ${
      theme.palette.mode === "dark" ? colors.grey[600] : colors.grey[300]
    };
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${colors.blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? colors.blue[700] : colors.blue[200]
    };
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${
      theme.palette.mode === "dark" ? colors.blue[900] : colors.blue[100]
    };
    color: ${
      theme.palette.mode === "dark" ? colors.blue[100] : colors.blue[900]
    };
  }

  &.${optionClasses.highlighted} {
    background-color: ${
      theme.palette.mode === "dark" ? colors.grey[800] : colors.grey[100]
    };
    color: ${
      theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[900]
    };
  }

  &:focus-visible {
    outline: 3px solid ${
      theme.palette.mode === "dark" ? colors.blue[600] : colors.blue[200]
    };
  }
  
  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${
      theme.palette.mode === "dark" ? colors.blue[900] : colors.blue[100]
    };
    color: ${
      theme.palette.mode === "dark" ? colors.blue[100] : colors.blue[900]
    };
  }

  &.${optionClasses.disabled} {
    color: ${
      theme.palette.mode === "dark" ? colors.grey[700] : colors.grey[400]
    };
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${
      theme.palette.mode === "dark" ? colors.grey[800] : colors.grey[100]
    };
    color: ${
      theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[900]
    };
  }
  `
);

const Popup = styled("div")`
  z-index: 1;
`;

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 100px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? colors.grey[900] : "#fff"};
  border: 1px solid ${
    theme.palette.mode === "dark" ? colors.grey[700] : colors.grey[200]
  };
  color: ${theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[900]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  
  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox<
  Value extends {},
  Multiple extends boolean
>(
  props: SelectListboxSlotProps<Value, Multiple>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});
