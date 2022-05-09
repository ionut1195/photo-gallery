import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'

export default function Contact() {
  return (
    <footer id='contact' className="flex justify-center py-10 mt-10 text-center text-white bg-border-dark">
			<div className="mb-9">
				<a href='#home'>
					<FontAwesomeIcon className='text-xl text-gray-800 mr-7 md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faAnglesUp} />
				</a>
				<a href='mailto:edgars.kraujins@gmail.com'>
					<FontAwesomeIcon className='text-xl text-gray-800 mr-7 md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faEnvelope} />
				</a>
				<a href="https://www.instagram.com/hachanphotography/" target={'_blank'} rel="noreferrer">
					<FontAwesomeIcon className='text-xl text-gray-800 mr-7 md:mr-12 md:text-2xl lg:mr-20 lg:text-3xl' icon={faInstagram} />
				</a>
			</div>
	</footer>
  )
}
