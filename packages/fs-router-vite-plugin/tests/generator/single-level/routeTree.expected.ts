// This file is auto-generated by Tuono

import { createRoute, dynamic } from 'tuono'

import RootImport from './routes/__root'

const AboutImport = dynamic(() => import('./routes/about'))
const IndexImport = dynamic(() => import('./routes/index'))

const rootRoute = createRoute({ isRoot: true, component: RootImport })

const About = createRoute({ component: AboutImport })
const Index = createRoute({ component: IndexImport })

// Create/Update Routes

const AboutRoute = About.update({
  path: '/about',
  getParentRoute: () => rootRoute,
})

const IndexRoute = Index.update({
  path: '/',
  getParentRoute: () => rootRoute,
})

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute, AboutRoute])
