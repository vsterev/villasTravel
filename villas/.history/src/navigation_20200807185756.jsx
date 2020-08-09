import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation