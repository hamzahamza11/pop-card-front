import { MailIcon } from '@heroicons/react/solid'

/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  
  function Table() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
         
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
           
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead className=''>
                  <tr className=''>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6 md:pl-0 text-primaryDark"
                    >
                      Reference commande
                    </th>
                    <th scope="col" className=" py-3.5 px-3 text-left text-sm font-bold text-primaryDark">
                      Date
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                      Gestionnaire
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold text-primaryDark">
                      Adresse Email
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                      Num tel
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                      Prenom
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                     Nom
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                     Adresse de livraison
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-bold  text-primaryDark">
                     Remarque
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border-dashed border-primaryLight">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{person.role}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

const TableList = ()=>{
return(
    <div className='mt-6'>
        <div className='w-64'>
     
      <div className="mt-1 relative rounded-lg shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-4 w-4 text-primaryLight">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </div>
        <input
          type="text"
          name="searchCommande"
          className=" py-2 ml-2  focus:outline-none focus:border-primaryDark focus:ring-1 focus:ring-primaryDark block w-full pl-10 sm:text-md border-primaryLight border-2 rounded-lg placeholder-primaryLight"
          placeholder="Chercher une Commande"
        />
      </div>
    </div>
    <Table/>
    </div>
    
)
}

export default TableList