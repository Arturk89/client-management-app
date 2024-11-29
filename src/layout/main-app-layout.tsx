import React from 'react'
import { Box } from "@mui/material";
import FullPageLayout from "./full-page-layout";
// import { Outlet } from "react-router-dom";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullPageLayout>
      <Box display="flex" width="100%">
        <Box>{children}</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
          <Box sx={{ height: '64px', background: 'red', padding: '5px 15px 5px 15px' }}>
            <div>navbar</div>
          </Box>
          <Box className="main-container-page" sx={{ background: 'green' }}>
          <p>main layout</p>
          </Box>
          {/* <Outlet /> */}
        </Box>
      </Box>
    </FullPageLayout>
  );
};

export default MainAppLayout;
