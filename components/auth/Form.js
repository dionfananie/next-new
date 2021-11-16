
import {func,bool} from 'prop-types'


const Form = ({setValue, isSignIn}) => {
    return (   
    <div className="rounded-md shadow-sm -space-y-px">
        <div>
         {!isSignIn &&   <>
            <label htmlFor="user-name" className="sr-only">
                User Name
            </label>
            <input
                id="user-name"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
                onChange={setValue}
            />
        </>}
        </div>
        <div>
        <label htmlFor="email-address" className="sr-only">
            Email address
        </label>
        <input
            id="email-address"
            name={isSignIn? 'identifier': 'email'}
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            onChange={setValue}
        />
        </div>
        <div>
        <label htmlFor="password" className="sr-only">
            Password
        </label>
        <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            onChange={setValue}
        />
        </div>
    </div> );
}
 
Form.propTypes = {
    setValue:func,
    isSignIn:bool
}
Form.defaultProps = {
    setValue:()=>{},
    isSignIn:false
}
export default Form;