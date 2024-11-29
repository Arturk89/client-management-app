import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const AppSection = ({ children }: { children: React.ReactNode })=> {
  return (
    <Box className="app-section">
    <Box className="app-section__appbar">
      {children}
    </Box>
    <Box className="app-section__main-container-page">
      <Outlet />
    </Box>
  </Box>
  )
}

export default AppSection