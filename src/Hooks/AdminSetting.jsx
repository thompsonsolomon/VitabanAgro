import React from 'react'
import Signup from '../components/Signup'
import ForgottenPassword from '../components/ForgottenPassword'
import { toast } from 'react-toastify'
import { useUser } from '../Context/userContext';
import { auth } from "../assets/data/firebase";

function AdminSetting() {
    const { currentUser } = useUser();

  const HandleSignOut = () => {
    if (!currentUser) {
      toast("no user Found")
    }
    signOut(auth)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Setting Page </h1>
     
      <div>
        <Signup />
      </div>
      <div>
        <ForgottenPassword />
      </div>

      <div className='flex w-full  items-center justify-end'>
        <button className='m-5 w-[100px] bg-blue-500 py-2 rounded-md text-center text-white p-2'
          onClick={
            () => {
              HandleSignOut()
            }
          }
        >Log {currentUser ? "Out " : "In"}</button>
      </div>
    </div>
  )
}

export default AdminSetting