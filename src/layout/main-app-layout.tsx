import { Box } from "@mui/material";
import FullPageLayout from "./full-page-layout";
// import { Outlet } from "react-router-dom";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullPageLayout>
      <Box display="flex" width="100%">
        <Box>{children}</Box>
        <Box className="main-container-page">
          <p>main layout</p>
          {/* <Outlet /> */}
        </Box>
      </Box>
    </FullPageLayout>
  );
};

export default MainAppLayout;
