import React from 'react'
import { Box } from '@mui/material'
import './index.css'

const AppPage = ({ children }: { children: React.ReactNode}) => {
  return (
    <Box className="app-page">
      {children}
    </Box>
  )
}

export default AppPage