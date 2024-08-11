'use client';
import React from 'react';
import Image from 'next/image';
import ExpandableCardLayout from './ExpandableCardLayout';
import { useTranslations } from 'next-intl';
import Conferences from '@/components/Conferences';

const LandingPage = () => {
	const landing = useTranslations('landing');

	return (
		<main className='min-h-screen w-full mx-auto'>
			<div className='mx-auto max-w-7xl flex flex-col items-center gap-10 mt-16 mb-10'>
				<div className='flex flex-col w-fit mx-auto'>
					<Image
						className='self-end mr-6'
						src={'/images/swiggle.svg'}
						alt='swiggle image'
						width={160}
						height={160}
						style={{ width: 'auto', maxHeight: '26px', height: '100%', objectFit: 'contain' }}
					/>

					<h1 className='font-semibold text-4xl text-center'>{landing('section1.header')}</h1>
				</div>
				<p className='text-center'>{landing('section1.description')}</p>
			</div>
			<div className='h-[38rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-start justify-center'>
				{/* Radial gradient for the container to give a faded look */}
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
				<Image
					className='drop-shadow-md'
					src={'/images/header-image-sample.png'}
					alt='header image sample'
					width={1800}
					height={1800}
					style={{ maxWidth: '1280px', width: '100%', height: 'auto', objectFit: 'contain', zIndex: 10 }}
				/>
			</div>
			<div className='min-h-screen flex flex-col items-start gap-20 my-40 max-w-7xl w-full mx-auto'>
				<div className='w-1/3 flex flex-col items-start justify-start gap-2'>
					<h2 className='font-bold text-primary text-xl'>{landing('section2.header')}</h2>
					<p className='font-medium text-foreground text-2xl leading-10'>{landing('section2.description')}</p>
				</div>
				<ExpandableCardLayout />
			</div>
			<div className='min-h-screen flex flex-col items-center gap-4 my-40 max-w-7xl w-full mx-auto'>
				<h2 className='text-primary font-bold text-2xl '>{landing('section3.header')}</h2>
				<p className='text-center text-woodsmoke-900 text-sm max-w-sm'>{landing('section3.description')}</p>
				<Conferences />
			</div>
		</main>
	);
};

export default LandingPage;
