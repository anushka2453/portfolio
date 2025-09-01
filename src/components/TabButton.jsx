import React from 'react'

const TabButton = ({active,selectTab,children}) => {
const buttonClasses = active ?  "text-pink-500 border-b border-pink-500" : "text-purple-500"

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default TabButton