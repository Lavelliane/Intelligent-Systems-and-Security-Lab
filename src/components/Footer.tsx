'use client';
import React from 'react';
import Image from 'next/image';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import global_en from '@/languages/en.json';

const Footer = () => {
	const footer = useTranslations('footer');

	return (
		<div className='w-full h-fit'>
			<div className='w-full flex flex-col p-4 pl-24 pr-16 bg-white text-dm-sans-default  text-custom-gray-50  font-DM_Sans py-11 gap-2'>
				<div className='w-full flex flex-row item-start justify-between pb-14'>
					<div className='w-full flex flex-col '>
						<Image
							className='w-[69px] h-[54px]'
							src={'/images/iss-logo.svg'}
							alt={'iss-logo'}
							width={300}
							height={200}
						></Image>
						<span className='flex items-center py-1 max-w-xs'>{footer('description')}</span>
					</div>
					<div className='flex flex-row justify-around items-start gap-20 text-nowrap'>
						<div className='items-center'>
							<h1 className=' text-woodsmoke-950 mb-8 font-bold'>{footer('about.label')}</h1>
							<div>
								<p className='py-1'>{footer('about.sub-sections.label1')}</p>
								<p className='py-1'>{footer('about.sub-sections.label2')}</p>
								<p className='py-1'>{footer('about.sub-sections.label3')}</p>
							</div>
						</div>
						<div className='items-center'>
							<h1 className=' text-woodsmoke-950 mb-8 font-bold'>{footer('legal.label')}</h1>
							<p className='py-1'>{footer('legal.sub-sections.label1')}</p>
							<p className='py-1'>{footer('legal.sub-sections.label2')}</p>
						</div>
						<div className=''>
							<h1 className=' text-woodsmoke-950 mb-8 font-bold'>{footer('contact-us.label')}</h1>
							<p className='flex flex-nowrap items-center'>
								<span className='p-2 text-woodsmoke-950'>
									<EnvelopeSimple size={20} color='#1c1c1c' />
								</span>
								{footer('contact-us.sub-sections.label1')}
							</p>
							<p className='flex flex-nowrap items-center'>
								<span className='p-2  text-woodsmoke-950'>
									<Phone size={20} color='#1c1c1c' />
								</span>
								{footer('contact-us.sub-sections.label2')}
							</p>
							<p className='flex flex-nowrap items-center'>
								<span className='p-2  text-woodsmoke-950'>
									<MapPin size={20} color='#1c1c1c' />
								</span>
								{footer('contact-us.sub-sections.label3')}
							</p>
						</div>
					</div>
				</div>
				<Divider />
				<div className='flex flex-row justify-between py-3'>
					<span>{footer('copyright')}</span>
					<div className='flex space-x-2 h-5 items-center w-fit'>
						<span>{footer('ARR')}</span>
						<Divider orientation='vertical' className='bg-woodsmoke-400 w-[.5px]' />
						<Link className=' underline underline-offset-2 text-primary' href='#'>
							{footer('TAC')}
						</Link>
						<Divider orientation='vertical' className='bg-woodsmoke-400 w-[.5px]' />
						<Link className=' underline underline-offset-2 text-primary' href='#'>
							{footer('PP')}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
