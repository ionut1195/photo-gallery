import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'

export default function Contact() {
  return (
    <footer id='contact' class="mt-10  py-10 flex bg-gray-50 justify-center text-center text-white">
			<div class="mb-9">
				<a href='#home'>
					<FontAwesomeIcon className='text-gray-800 mr-7 text-xl md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faAnglesUp} />
				</a>
				<a href='mailto:edgars.kraujins@gmail.com'>
					<FontAwesomeIcon className='text-gray-800 mr-7 text-xl md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faEnvelope} />
				</a>
				<a href="https://www.instagram.com/hachanphotography/" target={'_blank'} rel="noreferrer">
					<FontAwesomeIcon className='text-gray-800 mr-7 text-xl md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faInstagram} />
				</a>
			</div>
	</footer>
  )
}
