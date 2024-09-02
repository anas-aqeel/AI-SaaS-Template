"use client"
import { useState } from "react"

const AuthForm = ({ formType }: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const isSignup = formType === "signup"
  const isSignin = formType === "signin"
  const isForget = formType === "forget"

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission based on formType
  }

  return (
    <div className="mx-auto mt-7 max-w-sm rounded-lg bg-black shadow-sm">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-white">
            {isSignup && "Sign up"}
            {isSignin && "Sign in"}
            {isForget && "Forgot password?"}
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            {isSignup && (
              <>
                Already have an account?{" "}
                <a
                  className="font-medium text-yellow-500 decoration-2 hover:underline focus:underline focus:outline-none"
                  href="/signin"
                >
                  Sign in here
                </a>
              </>
            )}
            {isSignin && (
              <>
                Don{`'`}t have an account yet?{" "}
                <a
                  className="font-medium text-yellow-500 decoration-2 hover:underline focus:underline focus:outline-none"
                  href="/signup"
                >
                  Sign up here
                </a>
              </>
            )}
            {isForget && (
              <>
                Remember your password?{" "}
                <a
                  className="font-medium text-yellow-500 decoration-2 hover:underline focus:underline focus:outline-none"
                  href="/signin"
                >
                  Sign in here
                </a>
              </>
            )}
          </p>
        </div>

        <div className="mt-5">
          {(isSignin || isSignup) && (
            <>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3  text-sm  font-medium  text-white shadow-sm hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <svg className="h-auto w-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                {isSignin ? "Sign in" : "Sign up"} with Google
              </button>

              <div className="flex items-center py-3 text-xs  uppercase text-neutral-500 before:me-6  before:flex-1 before:border-t before:border-neutral-600  after:ms-6 after:flex-1 after:border-t after:border-neutral-600">
                Or
              </div>
            </>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-500 focus:border-yellow-500 focus:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50"
                  required
                />
              </div>

              {(isSignin || isSignup) && (
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-500 focus:border-yellow-500 focus:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50"
                    required
                  />
                </div>
              )}

              {isSignup && (
                <div>
                  <label htmlFor="confirm-password" className="mb-2 block text-sm text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-500 focus:border-yellow-500 focus:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50"
                    required
                  />
                </div>
              )}

              {isSignin && (
                <div className="flex items-center justify-between">
                  <a
                    className="inline-flex items-center gap-x-1 text-sm font-medium text-yellow-500 decoration-2 hover:underline focus:underline focus:outline-none"
                    href="/forget"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-yellow-600 px-4 py-3 text-sm font-medium text-white hover:bg-yellow-700 focus:bg-yellow-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {isSignup && "Sign up"}
                {isSignin && "Sign in"}
                {isForget && "Send Reset Link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
