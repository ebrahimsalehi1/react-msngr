import React from 'react';
import ShowList from '../../Components/Users/ShowList';
import {
    mount
} from '../../../enzymeConfig'
import {length} from "../../Utils/Helpers";

/**
 * test Showlist component
 */
it('render list and count it', () => {
    const data = [
        {
            id: 1,
            title: 'sunt aut facere '
        }
    ]

    const Wrapper = mount(
        <ShowList data={data}/>
    )

    expect(Wrapper.find('.list').length === length(data)).toBe(true)


});
