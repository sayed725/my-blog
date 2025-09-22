"use client"

import Link from "next/link"
import React from "react"
import { FiArrowLeft, FiHome, FiAlertTriangle } from "react-icons/fi"

const NotFound = () => {

     const handleGoBack = () => {
    window.history.back()
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300">
          {/* Decorative Gradients */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-200/20 to-blue-green/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-green-300/20 to-green-500/20 rounded-full blur-3xl -z-10"></div>

          {/* Circuit-like Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            <div
              className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-500 to-transparent animate-pulse"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row-reverse items-center">
            {/* Left Side - Message */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium mb-4 bg-gray-100 text-green-600 border border-blue-200">
                <FiAlertTriangle className="mr-2" />
                <span>Error 404</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Page Not Found
              </h1>

              <p className="text-lg md:text-xl font-medium mb-2 text-green-600">
                Oops! We couldn't find that page.
              </p>

              <p className="text-base mb-8 max-w-md text-gray-600">
                The page you’re looking for doesn’t exist or has been removed. Let’s get you back on track.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleGoBack}
                  className="group relative flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-100 text-green-600 border border-blue-200 hover:bg-blue-200"
                >
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Go Back
                </button>

                <Link
                  href="/"
                  className="group relative flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 bg-green-600 text-white hover:bg-primary"
                >
                  <FiHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Return to Homepage
                </Link>
              </div>
            </div>

            {/* Right Side - 404 Graphic */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Circles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-dashed animate-spin-slow opacity-20 border-blue-400"></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-4 border-dashed animate-spin-slow opacity-10 border-green-600"
                      style={{
                        animationDirection: "reverse",
                        animationDuration: "30s",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600">
                      404
                    </div>
                    <div className="mt-4 flex justify-center text-green-600">
                      <FiAlertTriangle size={48} className="animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default NotFound