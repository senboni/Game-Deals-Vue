import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Games from '../views/Games'
import About from '../views/About'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/games',
		name: 'Games',
		component: Games
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
