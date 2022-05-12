import React from 'react';
import { faCircleLeft, faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hiddendisplay = ({display, leftClick, rightClick, hide, show
, imgSource, photoId}) => {
  return (
    <div className={`${display} grid grid-cols-12 grid-rows-6  fixed top-0 self-center container justify-center items-center  backdrop-blur-lg z-10 rounded-2xl bg-blue-100 h-[100vh]`}>
        <div className='self-center row-start-6 justify-self-center col-span-full font-roboto md:text-2xl' ><p>Photo Id {photoId}</p></div>
        <FontAwesomeIcon onClick={leftClick} className='absolute text-2xl opacity-50 cursor-pointer md:col-start-1 md:col-span-1 md:row-span-full top-1/2 text-hover-color hover:opacity-100' icon={faCircleLeft} />
        <FontAwesomeIcon onClick={hide} className='hidden text-4xl opacity-50 cursor-pointer md:block md:row-start-1 md:row-span-1 md:col-start-12 md:self-start md:mt-2 justify-self-center text-hover-color hover:opacity-100 hover:text-red-600' icon={faCircleXmark} />
        <FontAwesomeIcon onClick={rightClick} className='absolute text-2xl opacity-50 cursor-pointer md:col-start-12 md:col-span-1 md:self-center justify-self-end row-span-full top-1/2 text-hover-color hover:opacity-100' icon={faCircleRight} />
        <img  onClick={show} src={imgSource} className='max-h-full md:mt-5 row-span-full col-span-full md:row-span-5 md:col-span-10 md:col-start-2 justify-self-center' alt=''></img>
		</div>
  );
}

export default Hiddendisplay;
