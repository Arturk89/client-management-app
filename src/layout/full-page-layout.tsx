import Grid from "@mui/material/Grid2";

const FullPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid className="layout" container>
      {children}
    </Grid>
  );
};

export default FullPageLayout;
