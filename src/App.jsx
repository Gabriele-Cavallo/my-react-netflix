import { Outlet } from 'react-router-dom'
import Header from './components/UI/Header'
import SearchInputContextProvider from './store/context'
import FavoritesContextProvider from './store/favorites'


function App() {
  return (
    <SearchInputContextProvider>
      <Header />
      <FavoritesContextProvider>
        <Outlet />
      </FavoritesContextProvider>
    </SearchInputContextProvider>
  )
}

export default App
