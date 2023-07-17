import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" legacyBehavior>
			<a className="px-layout mb-10 block">
				<Image
					src={LogoImage}
					width={247}
					height={34}
					alt="Cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
