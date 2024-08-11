import * as React from 'react';
import { Metadata } from 'next';
import { Inter, Kumbh_Sans } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import NavbarComponent from '../components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import Footer from '@/components/Footer';

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body className={`${kumbhSans.className} ${inter.variable}`} suppressHydrationWarning={true}>
				<NextIntlClientProvider messages={messages}>
					<NextUIProvider>
						<main className='w-full flex flex-col items-center'>
							<NavbarComponent />
							<div className='mt-16 w-full'>{children}</div>
							<Footer />
						</main>
					</NextUIProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
