import { useContext } from 'react';
import { Context } from '../data/Context';
 
export function Profile(){

    let { fetchName } = useContext(Context);

    return (<div className="Profile">
        <h2>{fetchName}</h2>
    </div>)
}