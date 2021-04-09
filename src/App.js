import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from './layout/Header/Component'
import {Content} from './layout/Content/Component'
import {Footer} from './layout/Footer/Component'
import {LoginPg} from './Pages/LoginPage/Component';

const routes = [
    {
        path: '/',
        isExact: true,
        component: LoginPg
    },
    // {
    //     path: '/widget',
    //     isExact: false,
    //     component: Addresses
    // },
]

export function App() {

    return (
        <>
            <Header>
                Header
            </Header>

            <Content>
                <Switch>
                    {routes.map(({path, component, isExact}) => (
                        <Route key={path} path={path} exact={isExact} component={component}/>
                    ))}

                    <Route render={() => <div>NOT FOUND PAGE</div>}/>
                </Switch>
            </Content>

            <Footer>
                Footer
            </Footer>
        </>
    )
}
