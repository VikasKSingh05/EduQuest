import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Jungle from './pages/jungle/Jungle'
import Zoo from './pages/zoo/Zoo'
import ErrorPage from './components/ErrorPage'
import IntroVideo from './pages/IntroVideo'
import AllCourses from './pages/AllCourses'
import ScrollToTop from './components/ScrollToTop'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import SelectAge from './pages/SelectAge'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import ProtectedRoute from './components/ProtectedRoute'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/courses",
        element:<Courses/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/intro",
        element:<IntroVideo/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/all-courses",
        element:(<>
        <ScrollToTop/>
        <AllCourses/>
        </>
    ),
        errorElement:<ErrorPage/>
    },
    {
        path: "/courses/zoo",
        element: <ProtectedRoute><Zoo/></ProtectedRoute>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/courses/jungle",
        element: <ProtectedRoute><Jungle/></ProtectedRoute>,
        errorElement:<ErrorPage/>
    },
     {
    path: "/sign-in/*",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
    },
    {
    path: "/sign-up/*",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
    },
    {
    path: "/select-age",
    element: <ProtectedRoute><SelectAge /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/leaderboard",
    element: <ProtectedRoute><Leaderboard /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    },
]);
export default Router;