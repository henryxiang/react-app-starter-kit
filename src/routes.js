import Dashboard from './views/Dashboard'
import Info from './views/Info'
import Chart from './views/Chart'
import Table from './views/Table'

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
