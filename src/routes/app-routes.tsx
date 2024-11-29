import { Routes, Route } from "react-router";

import ProcessPage from 'features/process-management/process-page.tsx'

export const AppRoutes = () => {
    return (
      <Routes>
          <Route index element={<ProcessPage />} />
      </Routes>
    )
}