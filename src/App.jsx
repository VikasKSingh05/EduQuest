import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function App(){
    return (
        <ErrorBoundary>
            <RouterProvider router = {Router}/> 
        </ErrorBoundary>
    );
}
export default App;