addSubDomain({
  description: 'Subdomain for my discord bot called Emofy.',
  domain: 'is-an.app',
  subdomain: 'emofy',
  owner: {
    repo: 'https://github.com/abku',
    email: 'theabku@gmail.com',
  },
  record: {
    NS: [
      'ns41.cloudns.net.',
      'ns42.cloudns.net.',
      'ns43.cloudns.net.',
      'ns44.cloudns.net',
    ],
  },
  proxy: false,
})
