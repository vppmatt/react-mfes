const HomePage = (props: HomePageProps) : JSX.Element => {

    const loginState = props.id !== 0;

    const login = () => {
        props.login({id:1, name : "Matt", role : "manager"})
    }

    const logout = () => {
        props.logout();
    }

    return (<div>
        <h3>Welcome to the Payments application.</h3>
        
        {!loginState && <button onClick={login} >Login</button>}
        {loginState && <button onClick={logout}>Logout</button>}
    </div>);
}

export default HomePage;

type user = {id:number, name: string, role: string};

export type HomePageProps = {id : number, login: (user: user) => void, logout : () => void }