import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');


  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const getErrorInfo = () => {
    if (error.status === 404) {
      return {
        title: "Page Not Found",
        message: "The page you're looking for doesn't exist. It might have been moved or deleted.",
        icon: "🔍"
      };
    }
    
    if (error.status === 403) {
      return {
        title: "Access Denied",
        message: "You don't have permission to access this page. Please log in or contact support.",
        icon: "🚫"
      };
    }
    
    if (error.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end. We're working to fix it. Please try again later.",
        icon: "⚡"
      };
    }
    
    return {
      title: "Something Went Wrong",
      message: "An unexpected error occurred. Please try again or contact support if the problem persists.",
      icon: "❌"
    };
  };

  const errorInfo = getErrorInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
    
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">{errorInfo.icon}</span>
        </div>

        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {errorInfo.title}
        </h1>
        
        <p className="text-gray-600 mb-6">
          {errorInfo.message}
        </p>

        {import.meta.env.DEV && error && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-700 overflow-auto max-h-32">
              <div className="font-semibold mb-1">Status:</div>
              <div className="mb-2">{error.status || 'Unknown'}</div>
              <div className="font-semibold mb-1">Message:</div>
              <div className="mb-2">{error.message || error.toString()}</div>
              {error.stack && (
                <>
                  <div className="font-semibold mb-1">Stack Trace:</div>
                  <div>{error.stack}</div>
                </>
              )}
            </div>
          </details>
        )}
    
        <div className="space-y-3">
          <button
            onClick={handleGoHome}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleGoBack}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>

            <button
              onClick={handleRefresh}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            Still having issues?
          </p>
          <button
            onClick={() => window.open('mailto:support@tendr.com', '_blank')}
            className="text-orange-600 hover:text-orange-700 font-medium text-sm"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 