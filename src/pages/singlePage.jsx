import React, {  useState } from 'react';
import { getUsers } from '../api/users';
import {  useQuery} from '@tanstack/react-query';
import { useParams } from "react-router-dom"

const SinglePage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);


  const usersListQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers({page, limit}),
  })
  
  
  const { userId } = useParams()
  const filteredUsers = usersListQuery?.results?.filter((user) =>  user?.uuid === userId)
 
 
 
 
 
 
  return (
    <div className="max-w-2xl mx-auto">

          <div className="font-bold text-xl mb-2 mx-auto w-2 py-4">Details</div>
      <div className=" rounded shadow-lg items-center py-4 px-4">
      <div className="px-2 pt-4 pb-2 flex bg-gray-200 rounded-full justify-between">
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#Fullname</p>
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">...Loading</p>
        </div>
      <div className="px-2 pt-4 pb-2 flex bg-gray-200 rounded-full justify-between mt-3">
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#Country</p>
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">...Loading</p>
        </div>
      <div className="px-2 pt-4 pb-2 flex bg-gray-200 rounded-full justify-between mt-3">
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#Email Address</p>
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">...Loading</p>

        </div>
      <div className="px-2 pt-4 pb-2 flex bg-gray-200 rounded-full justify-between mt-3">
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#Phone Number</p>
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">...Loading</p>

        </div>
      <div className="px-2 pt-4 pb-2 flex bg-gray-200 rounded-full justify-between mt-3">
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#Phone Number</p>
          <p className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">...Loading</p>

        </div>
         
      
      </div>




    </div>

  );
};


export default SinglePage