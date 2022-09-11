import React , { useEffect, useState } from "react"
import TableList from "./TableProfile"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
    { name: 'Tout', href: '#',component:<TableList /> ,count: '', current: true },
    { name: 'Traitees', href: '#',component:"hello Traitees" ,count: '', current: false },
    { name: 'En cours', href: '#',component:"hello En cours", count: '', current: false },
    { name: 'Annules', href: '#', component:"hello Annules",current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
  export default function Tabs() {
    const [switchTabs,setSwitchTabs] = useState(tabs)
  
    const handleSwitchTab = (item)=>{
        console.log(item)
        var arrayNavigation = switchTabs
        setSwitchTabs( prevState => {
          let tabs  = [...prevState]
          tabs.forEach((elm) => {
            if (elm.current === true && elm.name !== item.name) elm.current = false
            if (elm.name === item.name) {elm.current = true} 
          })
          return tabs
        } )
      }
    return (
      <div className="h-96 bg-red-100">
        <div className="sm:hidden mt-2 mx-2">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block bg-gray-50 border border-primary text-primaryDark text-sm rounded-lg focus:ring-primaryDark focus:border-primaryDark block w-full p-2.5 dark:bg-primary dark:border-bg-primaryDark dark:placeholder-primary dark:text-white dark:focus:ring-primaryDark dark:focus:border-primaryDark"
            defaultValue={switchTabs && switchTabs?.find((tab) => tab.current).name}
          >
            {switchTabs.map((tab) => (
              <option key={tab.name} onClick={()=>handleSwitchTab(tab)} className="text-primaryLight" >{tab.name}</option>
            ))}
          </select>
          <div className="mx-2"><TableList/></div>
        </div>
        <div className="hidden sm:block">
          <div className="h-96">
            <nav className="-mb-px px-24 mx-8 mt-8 flex  bg-primary space-x-8 rounded-tl-lg rounded-tr-lg " aria-label="Tabs">
              {switchTabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={()=>handleSwitchTab(tab)}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-primaryDark border-b-2'
                      : 'border-transparent text-primaryLight hover:text-primaryDark hover:border-primaryDark',
                    'whitespace-nowrap flex py-4 px-1 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                        'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>
            <div className="mx-8">{switchTabs.find((tab) => tab.current).component}</div>
            {/* <div className="mx-8"><TableList/></div> */}
          </div>
        </div>
      </div>
    )
  }
  