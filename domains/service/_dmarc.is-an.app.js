addSubDomain({
  description: 'DMARC record',
  domain: 'is-an.app',
  subdomain: '_dmarc',
  owner: {
    repo: 'https://github.com/tarampampam/free-domains',
  },
  record: {
    TXT: [
      'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;',
    ],
  },
})
