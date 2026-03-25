/* eslint-disable react-refresh/only-export-components */
import { createContext, useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("currentUser")) || null;
    });
    
    let navigate = useNavigate();
    // ✅ SIGN UP
    function signUp({ email, password }) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find((u) => u.email === email)) {
            alert("User already exists");
            return;
        }

        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setUser(newUser);
        alert("Sign up successful");
        navigate("/");
    }

    // // ✅ LOGIN
    function signIn({ email, password }) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
        (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            setUser(foundUser);
            alert("Login successful");
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    }

    // // ✅ LOGOUT
    function logout() {
        setUser(null);
        alert("Logged out");
        setTimeout(() => {
            navigate("/auth");
        }, 500);
    }

    return (
        <AuthContext.Provider value ={{ signUp , user, signIn, logout }}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
