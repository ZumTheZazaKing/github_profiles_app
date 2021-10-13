import { useContext, Suspense } from 'react';
import { Context } from '../data/Context';
 
export function Profile(){

    let { fetchData } = useContext(Context);

    return (<div className="Profile">

        <Suspense fallback={<h1>Loading...</h1>}>
            <div id="info">
                {fetchData.avatar_url ? <img src={fetchData.avatar_url} alt="pp" width={100} height={100}/> : ""}
                <p id="title">{fetchData.name}</p>
                <p id="login">{fetchData.login}</p>
                <br/>
                <p>{fetchData.bio}</p>
                
                <br/>
                <div id="others">
                    <p>{fetchData.blog ? <a href={fetchData.blog} target="_blank" rel="noreferrer">{fetchData.blog}</a> : ""}</p>
                    <p>{fetchData.email ? fetchData.email : ""}</p>
                    <p>{fetchData.company ? fetchData.company : ""}</p>
                    <p>{fetchData.followers ? `Followers: ${fetchData.followers}` : ""}</p>
                    <p>{fetchData.html_url ? <a href={fetchData.html_url} target="_blank" rel="noreferrer">{fetchData.html_url}</a> : ""}</p>
                    <p>{fetchData.location}</p>
                    <p>{fetchData.twitter_username ? <a href={`https://twitter.com/${fetchData.twitter_username}`} target="_blank" rel="noreferrer">@{fetchData.twitter_username}</a> : ""}</p>
                    <p>{fetchData.public_repos ? `Public Repositories: ${fetchData.public_repos}` : ""}</p>
                </div>
             </div>
        </Suspense>
    </div>)
}