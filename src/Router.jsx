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
import ComingSoon from './pages/ComingSoon'
import ProtectedRoute from './components/ProtectedRoute'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
        <ScrollToTop/>
        <Home/>
        </>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/courses",
        element:<>
        <ScrollToTop/>
        <Courses/>
        </>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/intro",
        element:<>
        <ScrollToTop/>
        <IntroVideo/>
        </>,
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
        element: <>
        <ScrollToTop/>
        <ProtectedRoute><Zoo/></ProtectedRoute>
        </>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/courses/jungle",
        element: <>
        <ScrollToTop/>
        <ProtectedRoute><Jungle/></ProtectedRoute>
        </>,
        errorElement:<ErrorPage/>
    },
     {
    path: "/sign-in/*",
    element: <>
    <ScrollToTop/>
    <SignInPage />
    </>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/sign-up/*",
    element: <>
    <ScrollToTop/>
    <SignUpPage />
    </>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/select-age",
    element: <>
    <ScrollToTop/>
    <ProtectedRoute><SelectAge /></ProtectedRoute>
    </>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/dashboard",
    element: <>
    <ScrollToTop/>
    <ProtectedRoute><Dashboard /></ProtectedRoute>
    </>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/leaderboard",
    element: <>
    <ScrollToTop/>
    <ProtectedRoute><Leaderboard /></ProtectedRoute>
    </>,
    errorElement: <ErrorPage />,
    },
    {
    path: "/courses/coming-soon",
    element: <>
    <ScrollToTop/>
    <ProtectedRoute><ComingSoon /></ProtectedRoute>
    </>,
    errorElement: <ErrorPage />,
    },
]);
export default Router;