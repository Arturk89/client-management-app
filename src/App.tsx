import './App.css'
// import LoginPage from "./features/auth/login-page";
import { ReactQuery } from './boot/react-query.tsx'
import MainAppLayout from 'layout/main-app-layout'
import Sidebar from 'features/sidebar/sidebar'
import AppSection from 'layout/app-section.tsx'
import Appbar from './features/appbar/appbar.tsx'
import AppPage from './features/app-page/app-page.tsx'
import { AppRoutes } from 'routes/app-routes.tsx'

function App() {
  return (
    <ReactQuery>
      <MainAppLayout>
          <Sidebar />
          <AppSection>
            <Appbar />
            <AppPage>
              <AppRoutes />
            </AppPage>
          </AppSection>
      </MainAppLayout>
    </ReactQuery>
  )
}

export default App
