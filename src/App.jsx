import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  )
}

export default App
