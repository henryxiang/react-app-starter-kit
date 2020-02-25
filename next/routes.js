import Dashboard from './pages/dashboard'
import Info from './pages/info'
import Chart from './pages/chart'
import Table from './pages/table'

const routes = [
  { 
    title: "Dashboard",
    faIcon: "faTachometerAlt",
    link: "/",
    view: Dashboard,
  },
  { 
    title: "Information", 
    faIcon: "faFolder", 
    link: "/info", 
    view: Info,
  },
  { 
    title: "Fancy Chart", 
    faIcon: "faChartArea", 
    link: "/chart",
    view: Chart,
  },
  { 
    title: "Data Table", 
    faIcon: "faTable", 
    link: "/table",
    view: Table,
  },
]

export default routes;
