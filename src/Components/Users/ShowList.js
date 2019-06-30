import React from 'react'
import {length} from 'Utils/Helpers'
import {withStyles} from "@material-ui/core";
import {UserListStyle} from "assets/Styles/UserListStyle"

/**
 * render list of posts
 * @param props
 * @returns {*}
 * @constructor
 */
function ShowList(props){
    const {classes, data}=props

    return(
        <div className={classes.List}>
            {length(data) > 0 && data.map(item=>(
                <div className={'list'} key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default withStyles(UserListStyle)(ShowList);
