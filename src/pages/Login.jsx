import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleClick = (path)=>{
        navigate(path);

    }
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={()=>handleClick('/home')}>Se Connecter</button>
            <button onClick={()=>handleClick('/products')}>Produits</button>
            
        </>
    );
}

export default Login;
