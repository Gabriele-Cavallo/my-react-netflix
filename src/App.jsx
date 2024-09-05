import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SearchInputContextProvider from './store/context'



function App() {
  return (
    <SearchInputContextProvider>
      <Header />
      <Outlet />
    </SearchInputContextProvider>
  )
}

export default App
