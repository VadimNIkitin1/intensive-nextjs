import Layout from '@/components/Layout/Layout'

import { FC } from 'react'

import { IHome } from './Home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home Page</h1>
		</Layout>
	)
}

export default Home
