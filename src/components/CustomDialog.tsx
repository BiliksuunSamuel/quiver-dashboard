import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  alpha,
} from "@mui/material";
import { IModalProps } from "../interface";
import { Minus } from "iconsax-react";
import { SectionTitleView, Text } from ".";

export default function CustomDialog({
  showCloseIcon = false,
  children,
  zIndex = 1001,
  header,
  subHeading,
  ...others
}: IModalProps) {
  return (
    <Dialog
      sx={(theme) => ({
        zIndex,
        borderRadius: theme.spacing(0),
        ".MuiDialog-scrollPaper": {
          bgcolor: alpha(theme.palette.common.black, 0.18),
          padding: theme.spacing(2),
          justifyContent: "center",
          alignItems: "center",
        },
        ".MuiPaper-root": {
          borderRadius: theme.spacing(0.5),
          backgroundColor: theme.palette.background.paper,
        },
        justifyContent: "center",
        alignItems: "center",
      })}
      maxWidth="md"
      fullWidth
      {...others}
    >
      {showCloseIcon && (
        <DialogTitle>
          <Stack
            alignItems="center"
            justifyContent={header ? "space-between" : "flex-end"}
            direction="row"
          >
            {header && (
              <SectionTitleView header={header}>
                <Text>{header}</Text>
              </SectionTitleView>
            )}
            <IconButton
              onClick={() => {
                others.onClose && others.onClose({}, "backdropClick");
              }}
              size="small"
            >
              <Minus />
            </IconButton>
          </Stack>
        </DialogTitle>
      )}
      <DialogContent
        sx={(theme) => ({
          borderRadius: theme.spacing(1),
        })}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
