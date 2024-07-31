'use client';
import React from 'react';
import { Button, User } from '@nextui-org/react';
import { ArrowCircleUpRight } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

interface ExpandableCardProps {
	user: {
		name: string;
		title: string;
		description: string;
		image: string;
	};
	selectedCard: boolean;
	onCardClick: () => void;
}

const ExpandableCard = ({ user, selectedCard, onCardClick }: ExpandableCardProps) => {
	return (
		<AnimatePresence>
			<div
				onClick={onCardClick}
				className={`${
					selectedCard
						? 'min-w-80 bg-primary items-start'
						: 'min-w-32 bg-white items-center border border-foreground/10'
				} h-80 transition-all rounded-3xl flex p-6 flex-col gap-4 justify-between overflow-clip select-none`}
			>
				<User
					className={`h-12 w-full ${selectedCard ? 'justify-start' : 'justify-center'}`}
					name={
						selectedCard && (
							<motion.div
								transition={{ delay: 0.2 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='font-bold text-white select-none'
							>
								{user.name}
							</motion.div>
						)
					}
					description={
						selectedCard && (
							<motion.div
								transition={{ delay: 0.2 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='text-white select-none'
							>
								({user.title})
							</motion.div>
						)
					}
					avatarProps={{
						src: user.image,
						className: 'w-12 h-12 select-none',
						showFallback: true,
						name: user.name.charAt(0),
					}}
				/>

				{selectedCard && (
					<motion.h2
						transition={{ delay: 0.2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='font-normal text-xl text-white select-none'
					>
						{user.description}
					</motion.h2>
				)}
				{selectedCard && (
					<motion.div
						transition={{ delay: 0.2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='self-start'
					>
						<Button className='bg-white rounded-full font-semibold text-foreground'>
							View <ArrowCircleUpRight size={28} />
						</Button>
					</motion.div>
				)}

				{!selectedCard && (
					<motion.div
						transition={{ delay: 0.2 }}
						initial={{ rotate: 100 }}
						animate={{ rotate: 0 }}
						exit={{ rotate: 100 }}
						className='self-start'
					>
						<Button className='bg-transparent rounded-full font-semibold text-foreground/10 p-0 min-w-fit min-h-fit w-fit h-fit'>
							<ArrowCircleUpRight size={28} />
						</Button>
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	);
};

export default ExpandableCard;
