import React, { useEffect, useState } from "react";
import "./Login.css";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Login() {
    const [signIn, setSignIn] = useState(false);
    const [mail, setMail] = useState('')
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify('LogIn'))
        async function getData() {
            const data = await axios.get('https://bookmyshow-clone-backend-8h46.onrender.com/users')
            setUsers([...data.data])
        }
        getData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(users);
        let ok = true
        for (let i in users) {
            if (users[i].email == mail) {
                ok = true
                localStorage.setItem("name", JSON.stringify(users[i].email.split('@')[0]))
                console.log('login');
                break;
            }
            else {
                ok = false
            }
        }
        if (ok) {
            alert('Login Success')
            navigate("/netflix-show")
        }
        else {
            alert('Inalid credentials')
            setSignIn(true)
        }
        setMail('')
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="/netflixLogo.png"
                    alt="Netflix logo"
                />
                <button onClick={() => setSignIn(true)} className="loginScreen__button">
                    Sign In
                </button>

                <div className="loginScreen__gradient"></div>
            </div>

            <div className="loginScreen__body">
                {signIn ? (
                    <Signup setSignIn={setSignIn} />
                ) : (
                    <>
                        <h1>Unlimited Movies, Tv Shows and more.</h1>
                        <h2>Watch anywhere, cancel at any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </h3>

                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" value={mail} onChange={(e) => setMail(e.target.value)} />
                                <button
                                    onClick={handleSubmit}
                                    className="loginScreen__getStarted"
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;