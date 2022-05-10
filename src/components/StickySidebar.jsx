import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faAnglesDown} from '@fortawesome/free-solid-svg-icons'

export default function StickySidebar() {
  return (
	<div  className='hidden z-10 text-header-green sticky justify-center gap-y-2 items-center text-2xl bg-border-dark md:grid grid-rows-2 w-10 h-20 top-[50vh] left-[calc(100%_-_3rem)] rounded-lg'>
			<a className='hover:text-hover-color ' href='#home'><FontAwesomeIcon icon={faAnglesUp} /></a>
			<a className='hover:text-hover-color' href='#contact'><FontAwesomeIcon icon={faAnglesDown} /></a>
	</div>
  )
}
