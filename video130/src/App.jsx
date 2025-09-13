import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HOME from './components/Home';
import VAULT from './components/Vault'
import CODER from './components/Coder';
// import ABOUT from './components/About';
// import LOGIN from './components/Login';
import Layout from './components/Layout';


function App() {
    const router = createBrowserRouter([
        {   
            path: "/",
            element:<Layout />,
            children: [
                {index: true, element: <HOME />},
                {path: "/vault", element: <VAULT />},
                {path: "/coder", element: <CODER />},
                // {path: "/about", element: <ABOUT />},
                // {path: "/contact", element: <CONTACT />},
                // {path: "/login", element: <LOGIN />},
            ]
        }
    ])

  return (
        <>  
            <RouterProvider router={router} />
        </>
  )
}

export default App
