addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'kashif-kadri',
  owner: {
    repo: 'https://github.com/kashif-kadri/kashif-kadri.github.io',
    email: 'kashif.kadri@acquaintsofttech.com',
  },
  record: {
    CNAME: 'kashif-kadri.github.io',
  },
  proxy: false,
})
