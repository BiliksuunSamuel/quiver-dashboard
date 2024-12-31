import { Checkbox, Stack, alpha } from "@mui/material";
import { FluidContainer } from "../../views";
import { Column, CustomInput, Row, SizedBox, Text } from "../../components";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { LogoView } from "../../shared";

export default function RegisterPage() {
  const navigation = useNavigate();
  return (
    <FluidContainer bgcolor={(theme) => theme.palette.primary.main}>
      <Stack width="100%" height="100%" direction="row">
        <Stack
          padding={(theme) => theme.spacing(5)}
          flex={2}
          alignItems="flex-start"
          justifyContent="flex-start"
          height="100%"
        >
          <Row height="60px" justifyContent="flex-start">
            <LogoView variant="primary" />
          </Row>
          <Stack height="100%" alignItems="center" paddingTop={10}>
            <Column>
              <Text
                fontWeight="bold"
                color={(theme) => theme.palette.common.white}
                variant="h3"
              >
                Welcome 🤗
              </Text>
              <Text
                fontFamily="Poppins"
                fontSize="18px"
                color={(theme) => alpha(theme.palette.common.white, 0.85)}
              >
                to the newest member of Quiver team
              </Text>
            </Column>
          </Stack>
        </Stack>
        {/*"form section"*/}
        <Stack
          flex={1.5}
          height="100%"
          bgcolor={(theme) => theme.palette.common.white}
          padding={2}
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={2}>
            <Row justifyContent="space-between" alignItems="flex-start">
              <Column alignItems="flex-start">
                <Text fontWeight="bold" fontSize={(theme) => theme.spacing(3)}>
                  Create an account
                </Text>
                <Text>Setup a password for your account.</Text>
              </Column>
              <SizedBox mx={6} />
              <PrimaryButton style={{ fontWeight: "bold", fontSize: "14px" }}>
                Login
              </PrimaryButton>
            </Row>
            <SizedBox height={10} />
            <Column width="100%" spacing={2}>
              <CustomInput
                label="Email Address"
                placeholder="lolu@quiverfinance.com"
                fullWidth
                height="50px"
                type="email"
                required
              />
              <CustomInput height="50px" label="Password" type="password" />
              <CustomInput
                height="50px"
                label="Confirm Password"
                type="password"
              />
            </Column>
            <Row style={{ marginLeft: "-12px" }} justifyContent="flex-start">
              <Checkbox id="remember-pwd-cbx" size="medium" />
              <Text
                component="label"
                htmlFor="remember-pwd-cbx"
                color={(theme) => alpha(theme.palette.common.black, 0.85)}
                fontWeight="normal"
                style={{ cursor: "pointer" }}
              >
                Remember password
              </Text>
            </Row>
            <Stack>
              <PrimaryButton
                style={{ height: "60px", fontSize: "18px" }}
                onClick={() => navigation("/dashboard", { relative: "path" })}
              >
                Create Account
              </PrimaryButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </FluidContainer>
  );
}
