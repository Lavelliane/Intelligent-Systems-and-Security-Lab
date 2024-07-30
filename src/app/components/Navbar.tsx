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
} from '@nextui-org/react';

const menuItems = [
	{ label: 'Publications', name: 'publication', href: '/' },
	{ label: 'Conference', name: 'conference', href: '/conference' },
	{ label: 'Awards', name: 'awards', href: '/awards' },
	{ label: 'Thesis', name: 'thesis', href: '/thesis' },
	{ label: 'Lab Member', name: 'thesis', href: '/theis' },
];

const NavbarComponent = () => {
	return (
		<Navbar isBordered className='h-24 max-w-7xl w-full mx-auto'>
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
					<NavbarItem key={item.name} isActive>
						<Link color='foreground' href={item?.href}>
							{item?.label}
						</Link>
					</NavbarItem>
				))}
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
					<NavbarMenuItem key={`${item}-${index}`}>
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
		</Navbar>
	);
};

export default NavbarComponent;
