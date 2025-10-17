import React from 'react'
import AuthIllustration from "/images/auth_illustration.png"
import { Link } from 'react-router-dom'
import LoginForm from '../Components/Auth/LoginForm'

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-deepDark py-4">
      <div className="max-w-4xl flex-1">
        <div className="container grid items-center gap-6 lg:grid-cols-2">
          <div className="max-lg:text-center">
            <img class="mb-6 w-3/4 max-lg:mx-auto max-lg:hidden" src={AuthIllustration} alt="auth_illustration" />
            <div>
              <h1 class="mb-2 text-2xl font-bold lg:text-3xl">XConnection</h1>
              <p class="max-w-xs text-sm text-gray-600/95 lg:text-base ">
                Create a social media app with features like posts, reactions, comments and profile.
              </p>
            </div>
          </div>
          <div className='card py-3 px-3 lg:px-5'>
            <LoginForm />
            <div class="py-3 lg:py-4">
              <p class="text-center text-xs text-red-800/95">Don't have account? <Link to="/register" class="text-white transition-all hover:text-lwsGreen hover:underline">Create New</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage