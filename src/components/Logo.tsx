import React from 'react'
import { BsAppIndicator } from 'react-icons/bs'

const Logo = () => {
  return (
    <div className="flex items-center">
      <BsAppIndicator className="sm:text-3xl sm:mr-2" />
      <h4 className="sm:text-lg text-sm font-bold">FrontendInit</h4>
    </div>
  )
}

export default Logo
