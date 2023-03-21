addSubDomain({
  description: 'www subdomain',
  domain: 'phucanh.dev',
  subdomain: 'www',
  owner: {
    repo: 'https://phucanhdev.github.io/',
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
