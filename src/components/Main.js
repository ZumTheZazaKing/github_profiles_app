import { useContext, lazy, Suspense } from "react";
import { Context } from '../data/Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = lazy(() => import('./Profile').then(module => ({default:module.Profile})));

export function Main(){

    let { username, setUsername, setFetchData } = useContext(Context);

    const search = e => {
        e.preventDefault();

        if(!username){
            return toast.error("Username can't be empty")
        }

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.message === "Not Found"){
                return toast.error("Something went wrong")
            }

            setFetchData(data)
            toast.success("Success")
        })
    }

    return (<div className="Main">
        <h1>Github Profiles</h1>
        <form onSubmit={e => search(e)}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </form>
        
        <Suspense fallback={<h1>Loading...</h1>}>
            <Profile/>
        </Suspense>

        <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </div>)
}