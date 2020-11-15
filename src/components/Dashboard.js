import React from 'react'
import SideBar from './SideBar'

export function Dashboard( { user }) {
    return (
        <div style={{display: 'flex', height: '100vh'}}>
           {/* {user.name} */}
            <SideBar user={user} /> 
        </div>
    )
}

export default Dashboard