addSubDomain({
  description: 'to test my self hosted apps',
  domain: 'is-an.app',
  subdomain: 'setareh',
  owner: {
    email: 'inesmeier@protonmail.com',
  },
  record: {
    NS: ['ns1.gcorelabs.net', 'ns2.gcdn.services'],
  },
  proxy: false,
})
