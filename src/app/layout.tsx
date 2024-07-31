import * as React from 'react';
import { Metadata } from 'next';
import { Inter, Kumbh_Sans } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import NavbarComponent from './components/Navbar';

const kumbhSans = Kumbh_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--kumbh-sans',
});
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--inter' });

export const metadata: Metadata = {
	title: 'ISS - USC',
	description: 'Website application for Intelligent and Secure Systems Laboratory',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${kumbhSans.className} ${inter.variable}`} suppressHydrationWarning={true}>
				<NextUIProvider>
					<main className='w-full flex flex-col items-center'>
						<NavbarComponent />
						<div className='mt-16 w-full'>{children}</div>
					</main>
				</NextUIProvider>
			</body>
		</html>
	);
}
