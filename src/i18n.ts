import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config

export default getRequestConfig(async () => {
	// Validate that the incoming `locale` parameter is valid
	const locales = ['en', 'kr'];

	const locale = 'en';
	return {
		locale,

		messages: (await import(`./languages/${locale}.json`)).default,
	};
});
