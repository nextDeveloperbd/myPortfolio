import UseAxiosSecure from "../Hook/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const Users = () => {
    const axiosSecure = UseAxiosSecure()
    const{data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    });
    // Make Admin
    const handleMakeAdmin = async(id)=>{
        try {
          const {data} = await axiosSecure.patch(`/users/admin/${id}`)
          if(data.modifiedCount){        
            toast.success(`Make admin successfull`)
            // refresh data
           refetch()
          }      
        } catch (error) {
          console.log(error.message);
        }    
      };
      const handleConfirmAdmin = (id) =>{
        toast(
          (t) => (
            <div>
              <h3 className='my-2'>Are you sure to Make admin?</h3>
              <div className='flex gap-2'>
              <button className='px-3 py-1 rounded bg-red-600 text-white' onClick={() => {
              toast.dismiss(t.id)
              handleMakeAdmin(id)
              }
              }>Yes</button>
              <button className='px-3 py-1 rounded bg-green-600 text-white' onClick={() => toast.dismiss(t.id)}>Cancel</button>
              </div>
            </div>
          )
        );
      };

    // Delete function
const handleDelete = async(id)=>{
    try {
      const {data} = await axiosSecure.delete(`/users/${id}`)
      if(data.deletedCount){        
        toast.success(`User deleted successfull`)
        // refresh data
       refetch()
      }      
    } catch (error) {
      console.log(error.message);
    }    
  };
  const handleConfirmDelete = (id) =>{
    toast(
      (t) => (
        <div>
          <h3 className='my-2'>Are you sure?</h3>
          <div className='flex gap-2'>
          <button className='px-3 py-1 rounded bg-red-600 text-white' onClick={() => {
          toast.dismiss(t.id)
            handleDelete(id)
          }
          }>Yes</button>
          <button className='px-3 py-1 rounded bg-green-600 text-white' onClick={() => toast.dismiss(t.id)}>Cancel</button>
          </div>
        </div>
      )
    );
  };
    return (
        <div>
            <Helmet>
                <title>Checkout List | orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <h1 className="font-semibold text-xl md:text-2xl text-center my-2">Users List: {users?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>CreatedAt</th>
                                <th>Last login</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.createdAt}</td>
                                    <td>"last singin"</td>
                                    <td>{user?.role === 'admin' ? 'Admin':<button onClick={() =>handleConfirmAdmin(user?._id)}><FaUsers/></button>}</td>
                                    <td><button onClick={() => handleConfirmDelete(user?._id)} className="text-red-700"><FaTrashAlt/></button></td>
                                </tr>)
                            }
                            {/* row 1 */}


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Users;