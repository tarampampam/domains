addSubDomain({
  description: 'I want to publish my app for test',
  domain: 'is-an.app',
  subdomain: 'gandom',
  owner: {
    email: 'ErnestJ.Morrison@pm.me',
  },
  record: {
    NS: ['ns1.gcorelabs.net', 'ns2.gcdn.services'],
  },
  proxy: true,
})
