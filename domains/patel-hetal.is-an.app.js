addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'patel-hetal',
  owner: {
    repo: 'https://github.com/patel-hetal/patel-hetal.github.io',
    email: 'patel.hetal@acquaintsofttech.com',
  },
  record: {
    CNAME: 'patel-hetal.github.io',
  },
  proxy: false,
})
