'use client';
import { motion, useMotionValue } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

interface ConferenceDataTypes {
	date: string;
	location: string;
	description: string;
	imageURL: string;
}

const conferenceData = [
	{
		date: 'DEC 2024',
		location: 'Gangwon, Korea',
		description: 'Proc. of the World Automation Congress 2021',
		imageURL: 'https://ubf.org/images/articles/2023/1702490189.jpg',
	},
	{
		date: 'JAN 2023',
		location: 'Seoul, Korea',
		description: 'Dummy Testing Conference 2021',
		imageURL: 'https://www.korea.net/upload/fileShare/2023/07/1689665606993.jpg',
	},
];

const DRAG_BUFFER = 50;
const Conferences = () => {
	const [dragging, setDragging] = useState<boolean>(false);
	const [conferenceIndex, setConferenceIndex] = useState<number>(0);

	const dragX = useMotionValue(0);
	const onDragStart = () => {
		setDragging(true);
	};

	const onDragEnd = () => {
		setDragging(false);
		const x = dragX.get();
		if (x <= -DRAG_BUFFER && conferenceIndex < conferenceData.length - 1) {
			setConferenceIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && conferenceIndex > 0) {
			setConferenceIndex((pv) => pv - 1);
		}
	};
	return (
		<div className='flex flex-col min-h-screen mx-auto overflow-hidden relative w-full'>
			<motion.div
				drag='x'
				className='flex cursor-grab items-center active:cursor-grabbing w-full'
				dragConstraints={{ left: 0, right: 0 }}
				animate={{ translateX: `-${conferenceIndex * 100}%` }}
				transition={{ type: 'spring', stiffness: 40 }}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				style={{ x: dragX }}
			>
				{conferenceData.map((data) => (
					<ConferenceCard
						key={data.description}
						date={data.date}
						location={data.location}
						description={data.description}
						imageURL={data.imageURL}
					/>
				))}
			</motion.div>
		</div>
	);
};

const ConferenceCard = ({ date, location, description, imageURL }: ConferenceDataTypes) => {
	return (
		<div className='relative w-full h-[560px] flex shrink-0 rounded-xl overflow-hidden select-none'>
			<Image
				src={imageURL}
				alt={'conference images'}
				width={1280}
				height={560}
				style={{ objectFit: 'cover', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
			/>

			<div className='flex bg-primary bg-opacity-90 rounded-3xl p-8 gap-4 absolute z-10 text-white bottom-4 left-4 max-w-xs w-full'>
				<h2 className='font-semibold text-base text-wrap w-14 text-center'>{date}</h2>
				<div className='flex flex-col justify-start'>
					<span className='font-semibold text-base'>{location}</span> <span className='text-xs'>{description}</span>
				</div>
			</div>
		</div>
	);
};

export default Conferences;
