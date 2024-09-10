import { Outlet } from 'react-router-dom'
import Header from './components/UI/Header'
import SearchInputContextProvider from './store/context'
import FavoritesContextProvider from './store/favorites'
import { useEffect, useState } from 'react'
import Login from './pages/Login'

function App() {
  const [userlogged, setUserLogged] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if(storedUser){
      setUserLogged(JSON.parse(storedUser));
    }
  }, [])

  function userLoggedHandler(user){
    if(user !== ''){
      setUserLogged(user)
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
      setUserLogged(user);
    }
  }

  return (
    <SearchInputContextProvider>
      <FavoritesContextProvider>
        {userlogged === '' ? <Login onUserLogged={userLoggedHandler} /> :
        <>
          <Header onUserLogin={userLoggedHandler} userLogged={userlogged} />
          <main>
            <Outlet />
          </main>
        </>
        }
      </FavoritesContextProvider>
    </SearchInputContextProvider>
  )
}

export default App
