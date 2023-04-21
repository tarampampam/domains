addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'kishan-bagiya',
  owner: {
    repo: 'https://github.com/kishan-bagiya/kishan-bagiya.github.io',
    email: 'kishan.bagiya@truestaz.com',
  },
  record: {
    CNAME: 'kishan-bagiya.github.io',
  },
  proxy: false,
})
