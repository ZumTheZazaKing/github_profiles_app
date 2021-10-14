import { useContext, lazy, Suspense } from "react";
import { Context } from '../data/Context';

import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

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
            if(data.message === "Not Found"){
                return toast.error("Something went wrong")
            }

            setFetchData(data)
            toast.success("Success")
        })
    }

    return (<div className="Main">
        <h1>Github Profiles</h1>
        <br/>
        <form onSubmit={e => search(e)}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <button type="submit"><SearchIcon id="searchIcon"/></button>
        </form>
        
        <Suspense fallback={<CircularProgress className="loading" size={40} disableShrink/>}>
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