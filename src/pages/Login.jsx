import { useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <>
        
            <h1>Login Page</h1>

            <button onClick={()=>handleClick('/home')}>
                Se connecter
            </button>

            <button onClick={()=>handleClick('/products')}>
                produits
            </button>

        </>
    );
}

export default Login;