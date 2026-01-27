import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import About from "../sections/About";

const routerPortfolio = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <App/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path: "/skills",
            element: <Skills/>
        },
        {
            path: "/projects",
            element: <Projects/>
        },
        {
            path: "/Contact",
            element: <Contact/>
        }
    ]
}])

export default routerPortfolio