'use client';
import React, { useEffect, useRef, useState } from 'react';
import ExpandableCard from './ExpandableCard';
import { motion, useMotionValue } from 'framer-motion';
import SkeletonCard from './SkeletonCard';

const userData = [
	{
		name: 'Jhury Kevin Lastre',
		title: 'Researcher',
		description: 'Digital Forensics Framework Design of Industrial Control System EWS for OT Security',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
	},
	{
		name: 'Vincent Abella',
		title: 'Researcher',
		description: 'Digital Forensics Framework Design of Industrial Control System EWS for OT Security',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702e',
	},
	{
		name: 'Mark Balili',
		title: 'Researcher',
		description: 'Digital Forensics Framework Design of Industrial Control System EWS for OT Security',
		image: '',
	},
	{
		name: 'Anna Gonzales',
		title: 'Researcher',
		description: 'Cybersecurity in Modern IT Infrastructures',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702f',
	},
	{
		name: 'Carlos Rivera',
		title: 'Researcher',
		description: 'AI and Machine Learning Applications in Healthcare',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702g',
	},
	{
		name: 'Emily Watson',
		title: 'Researcher',
		description: 'Blockchain Technology for Secure Transactions',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702h',
	},
	{
		name: 'David Lee',
		title: 'Researcher',
		description: 'Internet of Things (IoT) Security Solutions',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702i',
	},
	{
		name: 'Sophie Turner',
		title: 'Researcher',
		description: 'Big Data Analytics and Its Applications',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702j',
	},
	{
		name: 'James Smith',
		title: 'Researcher',
		description: 'Next-Generation Firewall Development',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702k',
	},
	{
		name: 'Olivia Brown',
		title: 'Researcher',
		description: 'Quantum Computing and Cryptography',
		image: 'https://i.pravatar.cc/150?u=a04258114e29026702l',
	},
];

const ExpandableCardLayout = () => {
	const [isClick, setIsClick] = useState(false);
	const [selectedCard, setSelectedCard] = useState<number | null>(0);
	const [isClient, setIsClient] = useState<boolean>(false);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const carousel = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		const updateScrollPosition = () => {
			const currentX = x.get();
			const element = carousel.current;

			if (element) {
				const scrollWidth = element.scrollWidth;
				const clientWidth = element.clientWidth;

				if (currentX >= 0) {
					setAtStart(true);
					setAtEnd(false);
				} else if (currentX <= clientWidth - scrollWidth) {
					setAtStart(false);
					setAtEnd(true);
				} else {
					setAtStart(false);
					setAtEnd(false);
				}
			}
		};

		const unsubscribeX = x.on('change', updateScrollPosition);

		return () => unsubscribeX();
	}, [x]);

	const handleCardClick = (index: number) => {
		if (isClick) {
			setSelectedCard(index);
		}
	};

	return (
		<motion.div ref={carousel} className='flex items-center w-full justify-start overflow-hidden relative'>
			{!atStart && (
				<motion.div
					initial={{ width: 0, height: '100%', opacity: 0 }}
					animate={{ width: '60px', height: '100%', opacity: 100 }}
					exit={{ width: 0, height: '100%', opacity: 0 }}
					className='bg-gradient-to-r from-white to-transparent absolute z-10 left-0'
				></motion.div>
			)}
			{!atEnd && (
				<motion.div
					initial={{ width: 0, height: '100%', opacity: 0 }}
					animate={{ width: '60px', height: '100%', opacity: 100 }}
					exit={{ width: 0, height: '100%', opacity: 0 }}
					className='w-36 h-full bg-gradient-to-l from-white to-transparent absolute z-10 right-0'
				></motion.div>
			)}
			<motion.div
				drag='x'
				onDrag={() => setIsClick(false)}
				onMouseMoveCapture={() => setIsClick(true)}
				dragConstraints={carousel}
				style={{ x }}
				className='flex cursor-grab active:cursor-grabbing gap-8'
			>
				{isClient &&
					userData.map((user, index) => (
						<ExpandableCard
							key={user.name}
							user={user}
							selectedCard={index === selectedCard}
							onCardClick={() => handleCardClick(index)}
						/>
					))}
			</motion.div>

			{isClient && userData.map((user, index) => <SkeletonCard key={index} />)}
		</motion.div>
	);
};

export default ExpandableCardLayout;
