import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../App";

const firebaseConfig = {
    apiKey: "AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",
    authDomain: "chekov-yc.firebaseapp.com",
    projectId: "chekov-yc",
    storageBucket: "chekov-yc.appspot.com",
    messagingSenderId: "861407056407",
    appId: "1:861407056407:web:935c2cc40563f9b0f7c252"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LoginForm() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(response => {
            setUser(response.user)
            navigate("/");
        })
        .catch(err => alert(err.message))
}

    const handleLogin= (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                setUser(response.user)
                //now send them back to "/"
                navigate("/");
            })
            .catch(err => alert(err.message))
    }

    return (
        <main>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleGoogle}>Login With Google</button> 
            <br/>
        </main>
    )
}