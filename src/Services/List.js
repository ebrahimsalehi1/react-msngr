import * as axios from "axios"
import {Routes} from "Utils/Config/Routers";

/**
 * call List of posts request
 * @param method
 * @returns {*}
 * @constructor
 */
export function ListAxios(method){
    return axios({
        method: method,
        url: Routes.posts,
    });
}
