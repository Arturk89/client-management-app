import './App.css'
// import LoginPage from "./features/auth/login-page";
import MainAppLayout from 'layout/main-app-layout'
import Sidebar from 'features/sidebar/sidebar'
import AppSection from 'layout/app-section.tsx'
import Appbar from './features/appbar/appbar.tsx'
import AppPage from './features/app-page/app-page.tsx'
import { AppRoutes } from 'routes/app-routes.tsx'

function App() {
  return (
    <MainAppLayout>
      <Sidebar />
      <AppSection>
        <Appbar />
        <AppPage>
          <AppRoutes />
        </AppPage>
      </AppSection>
    </MainAppLayout>
  )
}

export default App
