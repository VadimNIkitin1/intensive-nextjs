import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconsName } from '@/shared/types/icons.types'
import { FC } from 'react'

export const MaterialIcon: FC<{ name: TypeMaterialIconsName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
