import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Header} from './layout/Header/Component'
import {Content} from './layout/Content/Component'
import {Footer} from './layout/Footer/Component'
import {NotFoundPg} from './Pages/notFoundPage/Component';
import {Layout} from './layout/layout/Component';
import {MainMenu} from './modules/MainMenu/Component';
import {OwnerDataCard} from './modules/OwnerData/Component';
import {MainMenuWrap} from './modules/MainMenuWrap/Component';
import {routes} from './routes'
import {LogInOut} from './modules/LogIn.Out/Component';
export function App() {
    return (
        <Layout>
            <Header>
                <OwnerDataCard/>
                <MainMenuWrap>
                    <MainMenu/>
                    <LogInOut/>
                </MainMenuWrap>
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
