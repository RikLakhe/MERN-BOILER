import React, {useState} from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Auth = props =>{
    const [isSignUp,setSignUp] = useState(false);

    if( !isSignUp ){
           return <LoginForm isSignUp={isSignUp} setSignUp={setSignUp}/>
    }else{
        return <SignUpForm isSignUp={isSignUp} setSignUp={setSignUp}/>
    }
};

export default Auth;