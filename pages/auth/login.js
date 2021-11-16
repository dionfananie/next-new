
import { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Form from '../../components/auth/Form';

export default function Login() {

  const [field, setField] = useState({})
  const [loading, setLoading] = useState(false)

  const setValue = (e) => {
    const target  = e.target;
    const name = target.name;
    const value = target.value;
    setField({
      ...field,
      [name]:target.value,

    })
  }

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/local`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(field),
    })
    const res = await req.json();
    if(res.jwt){
      cookieCutter.set('login', res.jwt)
      setField({})
      setLoading(false);
    }
    
  }
  return (
    <>
      
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <Form isSignIn setValue={setValue}/>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
