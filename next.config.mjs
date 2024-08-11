import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'www.korea.net' },
			{ protocol: 'https', hostname: 'ubf.org' },
			{ protocol: 'https', hostname: 'i.pravatar.cc' },
		],
	},
};

export default withNextIntl(nextConfig);
