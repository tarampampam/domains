addSubDomain({
  description: 'my profile',
  domain: 'is-an.app',
  subdomain: 'dudani-meet',
  owner: {
    repo: 'https://github.com/dudani-meet/dudani-meet.github.io',
    email: 'meet.dudani@acquaintsofttech.com',
  },
  record: {
    CNAME: 'dudani-meet.github.io',
  },
  proxy: false,
})
