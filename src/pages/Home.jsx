import React, {useState } from 'react';
import {
  useQuery,
} from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/users';



const Home = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);

const usersListQuery = useQuery({
  queryKey: ['users', page, limit],
  queryFn: () => getUsers({page, limit}),
  keepPreviousData : true
})

const handleSelectChange = (event) => {
  setLimit(event.target.value);
};

  return (
    <>
{
  usersListQuery?.isLoading ? <h2 > Loading...</h2> :
  <>
  <div className="max-w-2xl mx-auto">
      
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div classNameName="flex items-center">
                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Fullname
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Country
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Email Address
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Phone Number
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          
                          
                          {
                            usersListQuery?.data?.results?.map((item, index) => (
                              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={item?.login?.uuid}>
                              
                              <td className="p-4 w-4">
                                  <div className="flex items-center">
                                      <label for="checkbox-table-1">{index/1}</label>
                                  </div>
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.name?.title} {item?.name?.first} {item?.name?.last}</td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{item?.location?.country}</td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.email}</td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item?.phone}</td>
                              <Link  to={`/singlePage/${item?.login?.uuid}`} key={item?.login?.uuid}>
                             
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Open</td>
                              
                              </Link>
                          </tr>
                            ))
                          } 
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    
<div class="flex flex-col items-center">
<select
        id="my-select"
        name="my-select"
        value={limit}
        onChange={handleSelectChange}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">-- Select an option --</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <p className="mt-2 text-sm text-gray-500">Selected value: {limit}</p><div class="inline-flex mt-2 xs:mt-0">
  <button  onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={page === 0} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
      Prev
  </button>
  <button  onClick={() => {
            setPage(old => old + 1)
        }}
        disabled={usersListQuery?.isPreviousData } 
         class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      Next
      <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
</div>

    </div>
  </>
}

    </>
 
  );
};




export default Home