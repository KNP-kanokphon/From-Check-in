// import AboutPage from '../pages/about';
// import HomePage from '../pages/home';
import RegisterFrom from '../Pages/index';

const routes = [
    {
        path: '/',
        name: 'Home Page',
        component: RegisterFrom,
        exact: true
    },
    // {
    //     path: '/about',
    //     name: 'About Page',
    //     component: AboutPage,
    //     exact: true
    // },
    // {
    //     path: '/about/:number',
    //     name: 'About Page',
    //     component: AboutPage,
    //     exact: true
    // },
]

export default routes;