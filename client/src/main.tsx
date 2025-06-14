import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
//import Home from './pages/Home.tsx';
//import Feedback from './pages/Feedback.tsx'
import AboutWedding from './pages/about-wedding.tsx';
import Abouttrip from './pages/about-trip.tsx';
import AboutWho from './pages/about-who.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
       {
        index: true,
        element: <Navigate to="about-wedding" replace />,
      },     
      {
        path: 'about-wedding',
        element: <AboutWedding />,
      },
      {
        path: 'about-trip',
        element: <Abouttrip />,
      },
       {
        path: 'about-who',
        element: <AboutWho />,
      },
    ],
  },
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
