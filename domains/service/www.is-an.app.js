addSubDomain({
  description: 'www subdomain',
  domain: 'is-an.app',
  subdomain: 'www',
  owner: {
    repo: 'https://github.com/tarampampam/free-domains',
  },
  record: {
    A: [
      '192.0.2.1',
    ],
    AAAA: [
      '100::',
    ],
  },
})
