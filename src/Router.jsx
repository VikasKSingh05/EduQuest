import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import ErrorPage from './components/ErrorPage'
import IntroVideo from './pages/IntroVideo'
import AllCourses from './pages/AllCourses'
import ScrollToTop from './components/ScrollToTop'
import Zoo from './pages/Zoo'
import Jungle from './pages/Jungle'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

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
        element: <Zoo/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/courses/jungle",
        element: <Jungle/>,
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
]);
export default Router;