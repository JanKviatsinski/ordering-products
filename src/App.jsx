import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './layout/Header'
import { Content } from './layout/Content'
import { Footer } from './layout/Footer'
import { NotFoundPg } from './Pages/notFoundPage'
import { Layout } from './layout/layout'
import { routes } from './routes'

export function App() {
  return (
    <Layout>
      <Header />

      <Content>
        <Switch>
          {routes.map(({ path, component, isExact }) => (
            <Route
              key={path}
              path={path}
              exact={isExact}
              component={component}
            />
          ))}
          <Route component={NotFoundPg} />
        </Switch>
      </Content>

      <Footer />
    </Layout>
  )
}
