import { useContext, Suspense } from 'react';
import { Context } from '../data/Context';
 
export function Profile(){

    let { fetchData } = useContext(Context);

    return (<div className="Profile">

        <Suspense fallback={<h1>Loading...</h1>}>
            <div id="info">
                {fetchData.avatar_url ? <img src={fetchData.avatar_url} alt="pp" width={100} height={100}/> : ""}
                <h1>{fetchData.name}</h1>
                <h2>{fetchData.login}</h2>
                <h3>{fetchData.bio}</h3>
                <p>{fetchData.blog}</p>
                <p>{fetchData.email ? fetchData.email : ""}</p>
                <p>{fetchData.company ? fetchData.company : ""}</p>
                <p>{fetchData.followers ? `Followers: ${fetchData.followers}` : ""}</p>
                <p>{fetchData.html_url}</p>
                <p>{fetchData.location}</p>
                <p>{fetchData.twitter_username ? `@${fetchData.twitter_username}` : ""}</p>
                <p>{fetchData.public_repos ? `Public Repositories: ${fetchData.public_repos}` : ""}</p>
             </div>
        </Suspense>
    </div>)
}