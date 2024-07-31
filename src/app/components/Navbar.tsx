'use client';
import React from 'react';
import Image from 'next/image';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nextui-org/react';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import { User } from '@nextui-org/user';
import { usePathname } from 'next/navigation';
import { CaretDown } from '@phosphor-icons/react';

const menuItems = [
	{ label: 'Publications', name: 'publication', href: '/' },
	{ label: 'Conference', name: 'conference', href: '/conference' },
	{ label: 'Awards', name: 'awards', href: '/awards' },
	{ label: 'Thesis', name: 'thesis', href: '/thesis' },
];

const labMembers = [
	{ label: 'Professor', name: 'professor', href: '#professor' },
	{ label: 'Research Professor', name: 'research-professor', href: '#research-professor' },
	{ label: 'Graduated Students', name: 'graduated-students', href: '#graduated-students' },
	{ label: 'Under Graduates', name: 'under-graduates', href: '#under-graduates' },
	{ label: 'Alumni', name: 'alumni', href: '#alumni' },
	{ label: 'Others', name: 'others', href: '#others' },
];

const NavbarComponent = () => {
	const pathName = usePathname();

	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<Navbar className='h-16 w-full fixed bg-opacity-80 bg-white backdrop-blur-sm z-[999] pt-10'>
			<div className='max-w-7xl w-full mx-auto flex'>
				<NavbarContent className='sm:hidden' justify='start'>
					<NavbarMenuToggle />
				</NavbarContent>

				<NavbarContent className='sm:hidden pr-3' justify='center'>
					<NavbarBrand>
						<Image
							src={'/images/iss-logo.svg'}
							alt='iss-logo'
							width={200}
							height={200}
							style={{ width: 'auto', maxHeight: '32px', objectFit: 'contain' }}
						/>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className='hidden sm:flex gap-4' justify='start'>
					<NavbarBrand>
						<Image
							src={'/images/iss-logo.svg'}
							alt='iss-logo'
							width={200}
							height={200}
							style={{ width: 'auto', maxHeight: '32px', objectFit: 'contain' }}
						/>
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent className='hidden sm:flex gap-4 w-full items-center justify-center' justify='center'>
					{menuItems.map((item, index) => (
						<NavbarItem key={item.name} isActive={pathName === item?.href}>
							<Link
								color={pathName === item?.href ? 'primary' : 'foreground'}
								href={item?.href}
								className={`${pathName === item?.href &&
									'underline underline-offset-4'} hover:text-foreground/80 text-base`}
							>
								{item?.label}
							</Link>
						</NavbarItem>
					))}
					<div className='flex flex-col gap-2'>
						<Popover
							isOpen={isOpen}
							onOpenChange={(open) => setIsOpen(open)}
							placement='bottom-start'
							color={undefined}
						>
							<PopoverTrigger>
								<Button color='default' className='bg-transparent p-0 text-base' disableRipple>
									Lab Members
									<CaretDown
										size={16}
										color='#242424'
										className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity ml-2`}
									/>
								</Button>
							</PopoverTrigger>
							<PopoverContent className='bg-white'>
								<div className='flex flex-col gap-2 items-start justify-start shadow-lg rounded-lg p-4 '>
									{labMembers.map((labMember) => (
										<NavbarItem key={labMember.name} isActive={pathName === labMember?.href}>
											<Link
												color={pathName === labMember?.href ? 'primary' : 'foreground'}
												href={labMember?.href}
												className={`hover:text-foreground/80 text-base list-none`}
											>
												{labMember?.label}
											</Link>
										</NavbarItem>
									))}
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</NavbarContent>

				<NavbarContent justify='end'>
					<NavbarItem>
						<Button as={Link} color='primary' className='rounded-full' href='#contact-us' variant='solid'>
							Contact us
						</Button>
					</NavbarItem>
				</NavbarContent>

				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item.name}`}>
							<Link
								className='w-full'
								color={index === 2 ? 'warning' : index === menuItems.length - 1 ? 'warning' : 'primary'}
								href={item.href}
								size='lg'
							>
								{item?.label}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</div>
		</Navbar>
	);
};

export default NavbarComponent;
