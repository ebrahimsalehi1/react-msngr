import React from "react"
import {useLoginStateValue} from "../../Utils/StateManagement";

function Index() {
    const [{authenticated},] = useLoginStateValue();

    return(
        <div>About is {authenticated?`loged in`:`loged out`}</div>
    )
}

export default Index;
