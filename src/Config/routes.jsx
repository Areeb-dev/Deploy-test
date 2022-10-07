import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Connection, Login } from '../Screens'
import { MenuLayout } from '../Components'
import allPaths from './paths'
import { Result, Button } from 'antd'
import { useSelector } from 'react-redux'

const Page404 = (props) => {
    const { history } = props
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button
                type='primary'
                className='form-button'
                onClick={() => history.push('/')}
            >Back Home</Button>}
        />
    )
}

const Routes = (props) => {
    const selectedLanguage = useSelector(state => state?.langReducer?.language)

    return (
        <Router>
            <Switch>
                <Route path={allPaths?.HOME} exact component={() => <Home selectedLanguage={selectedLanguage} />} />
                <Route path={allPaths?.CONNECTION} exact component={() => <Connection selectedLanguage={selectedLanguage} />} />
                <Route path={allPaths?.LOGIN} exact component={() => <Login selectedLanguage={selectedLanguage} />} />
                <Route path='/:page404' exact component={() => <Page404 selectedLanguage={selectedLanguage} />} />
            </Switch >
        </Router >
    )
}

export {
    Routes,
    Page404
}