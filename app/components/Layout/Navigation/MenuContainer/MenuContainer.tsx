'use client'

import { FC } from 'react'
import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'
import GenreMenu from './genres/GenreMenu'
import MainProviders from 'providers/MainProviders'

const MenuContainer: FC = () => {
	return (
		<div>
			<MainProviders>
				<Menu menu={firstMenu} />
				<GenreMenu />
				<Menu menu={userMenu} />
			</MainProviders>
		</div>
	)
}

export default MenuContainer
