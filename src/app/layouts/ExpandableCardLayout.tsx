'use client';
import React, { useEffect, useRef, useState } from 'react';
import ExpandableCard from './ExpandableCard';
import { ScrollShadow } from '@nextui-org/react';
import { motion } from 'framer-motion';

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
	const [isDragging, setIsDragging] = useState(false);
	const [isClick, setIsClick] = useState(false);
	const [selectedCard, setSelectedCard] = useState<number | null>(0);
	const [isClient, setIsClient] = useState<boolean>(false);
	const [width, setWidth] = useState(0);
	const carousel = useRef(null);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleCardClick = (index: number) => {
		if (isClick) {
			setSelectedCard(index === selectedCard ? null : index);
		}
	};

	return (
		<motion.div ref={carousel} className='flex items-center w-full justify-start overflow-hidden'>
			<motion.div
				drag='x'
				onDrag={() => setIsClick(false)}
				onMouseMoveCapture={() => setIsClick(true)}
				dragConstraints={carousel}
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
		</motion.div>
	);
};

export default ExpandableCardLayout;
