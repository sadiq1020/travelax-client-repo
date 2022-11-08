import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main';
import AllServices from '../../Pages/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import AddReviews from '../../Pages/Reviews/AddReviews/AddReviews';
import Reviews from '../../Pages/Reviews/Reviews/Reviews';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/allservices",
                element: <AllServices></AllServices>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/reviews",
                element: <Reviews></Reviews>
            },
            {
                path: "/addreviews/:id",
                element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;