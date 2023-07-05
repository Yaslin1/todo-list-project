import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { AuthContext } from "../../App";

const firebaseConfig = {
    apiKey: "AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",
    authDomain: "chekov-yc.firebaseapp.com",
    projectId: "chekov-yc",
    storageBucket: "chekov-yc.appspot.com",
    messagingSenderId: "861407056407",
    appId: "1:861407056407:web:935c2cc40563f9b0f7c252"
  };

export default function SignUpForm() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth,email, password)
            .then( response => {
                 setUser(response.user) 
            //now send them back to "/"
            navigate("/");
            })
            .catch(err => alert(err.message))
    }

     return (
       
        <form onSubmit={handleSignUp}>
            <label htmlFor="email">
                Email
                <input type="email" name="email" />
            </label>
            <br/>
            <label htmlFor="password">
                Password
                <input type="password" name="password"/>
            </label>
            <br/>
            <input type="submit" value="Sign Up"/>
        </form>
    )
}