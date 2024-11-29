import React from 'react'
import { Box } from "@mui/material";
import FullPageLayout from "./full-page-layout";
// import { Outlet } from "react-router-dom";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullPageLayout>
      <Box display="flex" width="100%">
        {children}
      </Box>
    </FullPageLayout>
  );
};

export default MainAppLayout;
