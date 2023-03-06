addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'heli-joshi',
  owner: {
    repo: 'https://github.com/heli-joshi/heli-joshi.github.io',
    email: 'heli.joshi@acquaintsofttech.com',
  },
  record: {
    CNAME: 'heli-joshi.github.io',
  },
  proxy: false,
})
