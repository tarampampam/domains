addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'shakera-vora',
  owner: {
    repo: 'https://github.com/shakera-vora/shakera-vora.github.io',
    email: 'shakera.vora@truestaz.com',
  },
  record: {
    CNAME: 'shakera-vora.github.io',
  },
  proxy: false,
})
