import React, {useEffect, useState} from "react"
import {ListAxios} from "Services/List";
import ShowList from "./ShowList";

/**
 * Users Function to get a list of posts
 * @returns {*}
 * @constructor
 */
function Users() {
    const [posts, setPosts] = useState()

    /**
     * get posts
     */
    function getPosts() {
        ListAxios('get').then(res => {
            const {data} = res;
            setPosts(data)
        })
    }

    useEffect(() => {
        getPosts();
    },[])

    return (
          <React.Fragment>
            <div>Users</div>
            { <ShowList data={posts}/> }
         </React.Fragment> 
    )
}

export default Users;
