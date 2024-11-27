import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const LoginForm = () => {
  return (
    <Grid container>
      <TextField id="outlined-basic" label="Outlined" variant="standard" />
      <TextField id="filled-basic" label="Filled" variant="standard" />
      <Button variant="contained">Zaloguj</Button>
    </Grid>
  );
};

export default LoginForm;
