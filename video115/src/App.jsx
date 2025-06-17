import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HOME from './components/Home';
import SERVICES  from './components/Services';
import ABOUT from './components/About';
import CONTACTS from './components/Contacts';
import USER from './components/user';


function App() {
    const router = createBrowserRouter([
        {   
            path: "/",
            element:<Layout />,
            children: [
                {index: true, element: <HOME />},
                {path: "/services", element: <SERVICES />},
                {path: "/about", element: <ABOUT />},
                {path: "/contact", element: <CONTACTS />},
                {path: "/user/:username", element: <USER />}
            ]
        }
    ])

    return (
        <>  
            {/* <NAVBAR /> */}
            <RouterProvider router={router} />
        </>
    );
}

export default App
