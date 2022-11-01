import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protect(props){
    const navigate=useNavigate()
    useEffect(()=>{
        const user=localStorage.getItem("user");
        if(!user){
            navigate("/")
        }
    })

    const {Component}=props;
    return(
            <Component />
    );
}

export default Protect;