import FullPageLayout from "layout/full-page-layout";
import LoginForm from "./components/login-form";
import Logo from "common/components/logo/logo";
import Grid from "@mui/material/Grid2";

const LoginPage = () => {
  return (
    <FullPageLayout>
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        size={12}
      >
        <Logo />
        <LoginForm />
      </Grid>
    </FullPageLayout>
  );
};

export default LoginPage;
