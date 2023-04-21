addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'jani-abhishek',
  owner: {
    repo: 'https://github.com/jani-abhishek/jani-abhishek.github.io',
    email: 'abhishek.jani@truestaz.com',
  },
  record: {
    CNAME: 'jani-abhishek.github.io',
  },
  proxy: false,
})
