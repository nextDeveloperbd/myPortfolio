import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import Hooks from "./Hooks";


const UseCart = () => {
    const {user} = Hooks()
    const axiosSecure = UseAxiosSecure()
    const {data : cart=[], refetch} = useQuery({
        queryKey:['cart', user?.email,],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch];
};

export default UseCart;