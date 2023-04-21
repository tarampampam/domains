addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'soni-ashish',
  owner: {
    repo: 'https://github.com/soni-ashish/soni-ashish.github.io',
    email: 'ashish.soni@truestaz.com',
  },
  record: {
    CNAME: 'soni-ashish.github.io',
  },
  proxy: false,
})
