import { IconButton, Stack, alpha, useTheme } from "@mui/material";
import { CustomSelectInput, MenuItemView, Row, Text } from "../../components";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function CustomPagination() {
  const theme = useTheme();
  return (
    <Stack paddingX={2}>
      <Row justifyContent="flex-start" spacing={3}>
        <Stack
          width="45px"
          height="40px"
          borderRadius={2}
          alignItems="center"
          justifyContent="center"
          border={`1px solid ${alpha(theme.palette.common.black, 0.35)}`}
        >
          <Text>1</Text>
        </Stack>
        <Text>of 29</Text>
        <Stack
          direction="row"
          alignItems="center"
          width="100px"
          justifyContent="center"
        >
          <IconButton
            sx={{
              borderRadius: theme.spacing(0.85, 0, 0, 0.85),
              bgcolor: alpha(theme.palette.common.black, 0.05),
              flex: 1,
              height: "45px",
              "&:hover": {
                background: alpha(theme.palette.common.black, 0.05),
              },
              color: alpha(theme.palette.common.black, 0.35),
            }}
          >
            <ArrowLeft2 />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: theme.spacing(0, 1, 1, 0),
              bgcolor: alpha(theme.palette.common.black, 0.185),
              flex: 1,
              height: "45px",
              "&:hover": {
                background: alpha(theme.palette.common.black, 0.185),
              },
              color: alpha(theme.palette.common.black, 0.8),
            }}
          >
            <ArrowRight2 />
          </IconButton>
        </Stack>
        <Text>Entries per page:</Text>
        <Stack width="80px">
          <CustomSelectInput
            style={{
              backgroundColor: theme.palette.common.white,
              border: `1px solid ${alpha(theme.palette.common.black, 0.05)}`,
              height: "45px",
              borderRadius: "8px",
              color: theme.palette.common.black,
              outline: "none",
            }}
            defaultValue="5"
            variant="outlined"
          >
            {[50, 25, 10, 5].map((cnt) => (
              <MenuItemView value={cnt} key={cnt}>
                {cnt}
              </MenuItemView>
            ))}
          </CustomSelectInput>
        </Stack>
      </Row>
    </Stack>
  );
}
