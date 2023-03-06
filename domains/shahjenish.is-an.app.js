addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'shahjenish',
  owner: {
    repo: 'https://github.com/shahjenish/shahjenish.github.io',
    email: 'jenish.shah@acquaintsofttech.com',
  },
  record: {
    CNAME: 'shahjenish.github.io',
  },
  proxy: false,
})
