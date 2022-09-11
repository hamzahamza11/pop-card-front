/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      title: 'Commandes traitees',
      value: '10',
      icon:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  export default function MiniCard() {
    return (
        <div className="w-72 bg-white rounded-lg h-max mx-4">
            <div className="ml-2 mt-1 grid grid-cols-1 gap-4 sm:grid-cols-1 bg-white">
        {people.map((person) => (
          <div
            key={person.email}
            className=" rounded-lg shadow-xl bg-white px-4 py-12 flex items-center space-x-3 border-1 border-gray-100"
          >
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-primaryDark rounded-full "></div>
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className=" inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-lg text-primaryDark">{person.title}</p>
                <p className="text-sm text-primaryDark text-lg truncate">{person.value}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    )
  }
  