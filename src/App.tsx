import './App.css'
// import LoginPage from "./features/auth/login-page";
import MainAppLayout from 'layout/main-app-layout'
import Sidebar from 'features/sidebar/sidebar'
import AppSection from 'layout/app-section.tsx'

function App() {
  return (
    <MainAppLayout>
      <Sidebar />
      <AppSection>
        <p>topbar</p>
      </AppSection>
    </MainAppLayout>
  )
}

export default App
