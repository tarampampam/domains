addSubDomain({
  description: 'Subdomain for selfhosted anonaddy instance for only personal usage',
  domain: 'is-an.app',
  subdomain: 'anonaddy',
  owner: {
    email: 'contact@anonaddy.is-an.app',
  },
  record: {
    NS: ['ns1.zilore.net', 'ns2.zilore.net'],
  },
  proxy: false
})
