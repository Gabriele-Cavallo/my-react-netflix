import { Link } from "react-router-dom";
const users = ['Mario', 'Rosa', 'Marco', 'Francesca'];


export default function Login({onUserLogged}) {
    return (
        <section className="px-5 h-[100vh] w-[100vw] grid md:grid-flow-col gap-20 place-content-center">
            {users.map(user => (
            <Link className="relative w-[170px] h-[12vh] border-2 hover:border-4 hover:scale-110 transition-all duration-300 border-white rounded-lg" onClick={() => onUserLogged(user)} to={'/home'} key={user}>
            <img src="" alt={user} />
            <div className="absolute left-[50%] translate-x-[-50%] -bottom-10 text-2xl">{user}</div>
            </Link>
            ))}
        </section>
    )
}