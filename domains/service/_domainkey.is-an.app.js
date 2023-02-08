addSubDomain({
  description: 'DKIM record',
  domain: 'is-an.app',
  subdomain: '*._domainkey',
  owner: {
    repo: 'https://github.com/tarampampam/free-domains',
  },
  record: {
    TXT: [
      'v=DKIM1; p=',
    ],
  },
})
