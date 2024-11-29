import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

const AppSection = ({ children }: { children: React.ReactNode })=> {
  return (
    <Box className="app-section">
      {children}
    </Box>
  )
}

export default AppSection