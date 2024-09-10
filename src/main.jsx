import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Films from './pages/Films.jsx';
import Series from './pages/Series.jsx';
import Selected from './pages/Selected.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Favorites from './pages/Favorites.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/films',
        element: <Films />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: ':movie/:selectedMovie',
        element: <Selected />
      },
      {
        path: ':tv/:selectedSerie',
        element: <Selected />
      },
    ]
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
