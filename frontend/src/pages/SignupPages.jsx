import React from "react";
import {Github,			UnlockKeyhole } from "lucide-react";
import {Link} from "react-router-dom"
const SignupPages = () => {
  const handleLoginGithub=()=>{
    window.open("http://localhost:8080/api/auth/github","_self");
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-glass">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold md:text-2xl text-center">
            Create Account
          </h1>
          <button
          onClick={handleLoginGithub}
         type='button'
         className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
         focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
         text-center justify-center'
          >
            <Github></Github>
          Sign up with Github
          </button>
          
					<p className='text-gray-300'>
						By signing up, you will unlock all the features of the app.
						<span>
							<UnlockKeyhole className='w-4 h-4 inline mx-2' />
						</span>
					</p>

					<p className='text-sm font-light text-gray-500'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Login
						</Link>
					</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPages;
