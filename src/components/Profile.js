import { useContext, Suspense, lazy } from 'react';
import { Context } from '../data/Context';

import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';

import CircularProgress from '@mui/material/CircularProgress';

const Repos = lazy(() => import('./Repos').then(module => ({default:module.Repos})));
 
export function Profile(){

    let { fetchData } = useContext(Context);

    return (<div className="Profile">

        <Suspense fallback={<CircularProgress className="loading" size={40} disableShrink/>}>
            <div id="info">
                {!fetchData.name && !fetchData.login ? <h2>Result displays here</h2> : ""}
                {fetchData.avatar_url ? <img src={fetchData.avatar_url} alt="pp" width={100} height={100}/> : ""}
                <p id="title">{fetchData.name}</p>
                <p id="login">{fetchData.login}</p>
                <br/>
                <p>{fetchData.bio}</p>
                
                <br/>
                <div id="others">
                    <p>
                        {fetchData.blog ? 
                        <span>
                            <LinkIcon className="icon"/>
                            <a href={fetchData.blog} target="_blank" rel="noreferrer">
                                {fetchData.blog}
                            </a>
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.email ? 
                        <span>
                            <EmailIcon className="icon"/>
                            {fetchData.email}
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.company ? 
                        <span>
                            <BusinessIcon className="icon"/>
                            {fetchData.company}
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.followers ? 
                        <span>
                            <PeopleIcon className="icon"/>
                            {fetchData.followers} followers
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.html_url ? 
                        <span>
                            <GitHubIcon className="icon"/>
                            <a href={fetchData.html_url} target="_blank" rel="noreferrer">
                                {fetchData.html_url}
                            </a>
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.location ? 
                        <span>
                            <LocationOnIcon className="icon"/>
                            {fetchData.location}
                        </span> : ""}
                    </p>
                    <p>
                        {fetchData.twitter_username ? 
                        <span>
                            <TwitterIcon className="icon"/>
                            <a href={`https://twitter.com/${fetchData.twitter_username}`} target="_blank" rel="noreferrer">
                                @{fetchData.twitter_username}
                            </a>
                        </span> : ""}
                    </p>
                </div>
                <br/>
                {fetchData.public_repos ? 
                    <Repos/> 
                : ""}
             </div>
        </Suspense>
    </div>)
}