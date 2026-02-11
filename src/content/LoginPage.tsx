'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LoginPage() {
    const { push: navigate } = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <button
        onClick={() => navigate('/home')}
        className="absolute top-8 left-8 text-gray-500 hover:text-[#252872] flex items-center font-medium transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </button>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="text-3xl font-extrabold tracking-tight mb-2">
            <span className="text-[#252872]">Gyan</span>
            <span className="text-[#d91f22]">Sewa</span>
          </div>
          <h1 className="text-2xl font-bold text-[#252872] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">
            Sign in to continue your learning journey
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/profile')}
            className="w-full flex items-center justify-center px-6 py-3.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700 bg-white"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <button
            onClick={() => navigate('/profile')}
            className="w-full flex items-center justify-center px-6 py-3.5 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
              <path d="M9.94475 22.0001V11.9367H7.05737V8.46808H9.94475V5.88933C9.94475 2.91058 11.6738 1.25 14.2486 1.25C15.4816 1.25 16.5408 1.34175 16.8497 1.3835V4.49658H15.0649C13.6796 4.49658 13.4116 5.18258 13.4116 6.18892V8.46808H16.756L16.3204 11.9367H13.4116V22.0001H9.94475Z" />
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 mb-6">
          By continuing, you agree to our{' '}
          <button
            onClick={() => navigate('/privacy')}
            className="text-[#d91f22] hover:underline"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            onClick={() => navigate('/privacy')}
            className="text-[#d91f22] hover:underline"
          >
            Privacy Policy
          </button>
          .
        </p>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="text-[#d91f22] font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
