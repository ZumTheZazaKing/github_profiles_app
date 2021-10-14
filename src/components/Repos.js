import { useContext, useEffect, useState } from 'react';
import { Context } from '../data/Context';

export function Repos(){

    let { fetchData } = useContext(Context);

    let [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`${fetchData.repos_url}?sort=created&per_page=10`)
        .then(res => res.json())
        .then(data => setRepos([...data]))
    }, [fetchData.repos_url])

    return (<div id="Repos">

        <h2>{fetchData.public_repos} Repositories</h2>
        {fetchData.public_repos > 10 ? <p id="notice">(Only 10 will be shown)</p> : ""}

        {repos && repos.map((repo, index) => 
        <div key={index} className="repo">
            <a href={repo.html_url} target="_blank" rel="noreferrer"><p id="title">{repo.name}</p></a>
            <p id="desc">{repo.description ? repo.description : "No description"}</p>
        </div>)}
    </div>)
}