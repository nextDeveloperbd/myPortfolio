import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Hooks = () => {
    const hook = useContext(AuthContext)
    return hook;
};

export default Hooks;