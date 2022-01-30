import React from 'react'

const search =  (props)=>{
    return(
        <input
            name='Search'
            className= 'search-box'
            type ='password'
            placeholder='search monsters'
            onChange={props.handleSearch}

        />
    )
}
export default search