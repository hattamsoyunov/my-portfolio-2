const projects = [
	// {
	// 	id: 'proj_012',
	// 	slug: '',
	// 	title: '',
	// 	types: ['#front-end'],
	// 	desc:
	// 		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi modi est eligendi minus. Ipsum, earum!',
	// 	client: 'Web studio "Lained"',
	// 	toolsList: ['#js', '#jq', '#pug', '#sass', '#canvas', '#webgl'],
	// 	link: '/',
	// 	addImagesQty: 0,
	// 	addMobileImagesQty: 0,
	// },
	{
		id: 'proj_012',
		slug: 'lained',
		title: 'Lained',
		types: ['#front-end'],
		desc:
			'Business website with "fullpage scroll" for "Lained". Presented on the website company services, projects, client testimonials and blog. The site has two color themes with automatic switching depending on the sunrise and sunset.',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#fullpagejs',
			'#suncalcjs',
			'#pug',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://лайнэд.рф/',
		addImagesQty: 9,
		addMobileImagesQty: 4
	},
	{
		id: 'proj_010',
		slug: 'forthedigitals',
		title: 'For The Digitals',
		types: ['#front-end'],
		desc:
			'Бизнес-сайт для компании "For The Digitals". For The Digitals - команды аутсорсинга и аутстаффинга по всему миру. Сайт полностью анимированный и отзывчивый к курсору.',
		client: 'Anton',
		toolsList: [
			'#jq',
			'#owlcarousel',
			'#pug',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://www.forthedigital.com/',
		addImagesQty: 7,
		addMobileImagesQty: 4
	},
	{
		id: 'proj_009',
		slug: 'sozdateli',
		title: 'Sozdateli',
		types: ['#front-end'],
		desc: 'Business website with "fullpage scroll" for web studio "Sozdateli"',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#canvas',
			'#webgl',
			'#threejs',
			'#swiperjs',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'http://sozdateli.devlained.ru/',
		addImagesQty: 7,
		addMobileImagesQty: 6
	},
	{
		id: 'proj_008',
		slug: 'vernadsky',
		title: 'Vernadsky',
		types: ['#front-end'],
		desc:
			'Business site  with "fullpage scroll" for the sale of a residential complex of business class "VernadSky"',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#canvas',
			'#webgl',
			'#marmosetjs',
			'#threejs',
			'#fullpagejs',
			'#owlcarousel',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://projects.hattam.ru/vernad_sky/',
		addImagesQty: 13,
		addMobileImagesQty: 7
	},
	{
		id: 'proj_007',
		slug: 'impecco',
		title: 'Impecco',
		types: ['#front-end'],
		desc:
			'Business site  with "fullpage scroll" for an advertising agency on contextual advertising "Impecco"',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#fullpagejs',
			'#owlcarousel',
			'#pug',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://impecco.ru/',
		addImagesQty: 9,
		addMobileImagesQty: 5
	},
	{
		id: 'proj_006',
		slug: 'dss-corp',
		title: 'DSS Corp',
		types: ['#front-end'],
		desc:
			'Business website for a company promoting IT products (cryptorobots, cryptobands) to the market through smart marketing',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#canvas',
			'#pug',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://dss.group/',
		addImagesQty: 0,
		addMobileImagesQty: 0
	},
	{
		id: 'proj_005',
		slug: 'luxury-marketing',
		title: 'Luxury Marketing',
		types: ['#front-end'],
		desc:
			'Business site  with "fullpage scroll" for the marketing agency "Luxury Digital Marketing"',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#fullpagejs',
			'#owlcarousel',
			'#pug',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'http://digitalluxmarketing.com/',
		addImagesQty: 6,
		addMobileImagesQty: 2
	},
	{
		id: 'proj_004',
		slug: 'russian-photo-awards',
		title: 'Russian Photo Awards',
		types: ['#front-end'],
		desc:
			'Website award in the field of photography in Russia. Photographers are voting on the site.',
		client: 'Web studio "Lained"',
		toolsList: ['#jq', '#ajax', '#sass', '#bootstrapgrid', '#flexbox'],
		link: 'https://www.russianphotoawards.com/',
		addImagesQty: 6,
		addMobileImagesQty: 0
	},
	{
		id: 'proj_003',
		slug: 'sushi100',
		title: 'Sushi100',
		types: ['#design', '#front-end', '#back-end'],
		desc:
			'The site of the restaurant for the delivery of Japanese cuisine "Sushi-100"',
		client: 'Web studio "Business sites"',
		toolsList: ['#jq', '#modx', '#minishop2', '#sass', '#flexbox'],
		link: 'http://суши-курск.рф/',
		addImagesQty: 4,
		addMobileImagesQty: 4
	},
	{
		id: 'proj_002',
		slug: 'yteam',
		title: 'YTeam',
		types: ['#front-end'],
		desc: 'Business website with "fullpage scroll" for "YTeam" company.',
		client: 'Web studio "Lained"',
		toolsList: [
			'#jq',
			'#fullpagejs',
			'#owlcarousel',
			'#sass',
			'#bootstrapgrid',
			'#flexbox'
		],
		link: 'https://projects.hattam.ru/komanda_y/',
		addImagesQty: 10,
		addMobileImagesQty: 0
	},
	{
		id: 'proj_001',
		slug: 'homefash',
		title: 'HOMEFASH',
		types: ['#front-end'],
		desc: 'Online store of home goods, html/css code developed for CMS Bitrix',
		client: 'Web studio "Lained"',
		toolsList: ['#jq', '#owlcarousel', '#sass', '#bootstrapgrid', '#flexbox'],
		link: 'https://projects.hattam.ru/homefash/',
		addImagesQty: 7,
		addMobileImagesQty: 0
	}
];

export default projects;
