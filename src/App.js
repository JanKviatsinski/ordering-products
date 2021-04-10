import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from './layout/Header/Component'
import {Content} from './layout/Content/Component'
import {Footer} from './layout/Footer/Component'
import {LoginPg} from './Pages/LoginPage/Component';
import {NotFoundPg} from './Pages/notFoundPage/Component';
import {Layout} from './layout/layout/Component';
import {MainMenu} from './modules/MainMenu/Component';
import {MenuItem} from './Components/MenuItem/Component';
import {OwnerDataCard} from './modules/OwnerData/Component';

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
        <Layout>
            <Header>
                <OwnerDataCard/>

                <MainMenu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <MenuItem key="1">nav 1</MenuItem>
                    <MenuItem key="2">nav 2</MenuItem>
                    <MenuItem key="3">nav 3</MenuItem>
                </MainMenu>
            </Header>

            <Content>
                <Switch>
                    {routes.map(({path, component, isExact}) => (
                        <Route key={path} path={path} exact={isExact} component={component}/>
                    ))}

                    <Route component={NotFoundPg}/>
                </Switch>
            </Content>

            <Footer>
                Footer
            </Footer>
        </Layout>
    )
}
