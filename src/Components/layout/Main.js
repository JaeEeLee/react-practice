import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DashBoard from '../dashboard'
import { FileUpload } from '../upload'

const Main = () => {

    return (
        <div className="main-content" style={{ minHeight: "874px" }}>
            <Route exact path='/' component={() => <DashBoard key={Date.now()} />} />
            <Route exact path='/' component={() => <DashBoard key={Date.now()} />} />
            <Route path='/dashboard/' component={() => <DashBoard key={Date.now()} />} />
            <Route exact path='/file' component={FileUpload} />
            {/* <Redirect from='*' to='/' /> */}
            asef
        </div>
    )
}

export default Main