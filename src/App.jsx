import { Outlet } from 'react-router-dom'
import Header from './components/UI/Header'
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
