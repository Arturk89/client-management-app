import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";

const LoginForm = () => {
  return (
    <Grid container>
      <TextField id="outlined-basic" label="Outlined" variant="standard" />
      <TextField id="filled-basic" label="Filled" variant="standard" />
    </Grid>
  );
};

export default LoginForm;
