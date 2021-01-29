import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { FileUpload } from '../upload'

const Main = () => {

    return (
        <div className="main-content" style={{ minHeight: '851px' }}>
            <Switch>
                <Route exact path='/file' component={() => <FileUpload key={Date.now()} />}/>
            </Switch>
        </div>
    )
}

export default Main