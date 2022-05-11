import React from 'react';
import { faCircleLeft, faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hiddendisplay = ({display, leftClick, rightClick, hide, show
, imgSource}) => {
  return (
    <div className={`${display}  fixed top-0 self-center container justify-center items-center  md:top-[10%] backdrop-blur-lg z-10 rounded-2xl bg-blue-100 h-[100vh]  md:h-50vh lg:h-[calc(100vh_-_20vh)]`}>
				<FontAwesomeIcon onClick={leftClick} className='absolute cursor-pointer left-0 top-1/2 text-hover-color text-2xl opacity-50 hover:opacity-100' icon={faCircleLeft} />
        <FontAwesomeIcon onClick={hide} className='absolute cursor-pointer right-0 top-0 text-hover-color text-2xl opacity-50 hover:opacity-100 hover:text-red-600' icon={faCircleXmark} />
				<FontAwesomeIcon onClick={rightClick} className='absolute cursor-pointer top-1/2 right-0  text-hover-color text-2xl  opacity-50 hover:opacity-100' icon={faCircleRight} />
				<img  onClick={show} src={imgSource} className='h-auto w-auto md:h-full' alt=''></img>
			</div>
  );
}

export default Hiddendisplay;
