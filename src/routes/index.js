import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/Portfolio'
import Stocks from '@/components/stocks/Stocks'


export const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'Portfolio'
    },
    {
        path: '/stocks',
        component: Stocks,
        name: 'Stocks'
    }
]