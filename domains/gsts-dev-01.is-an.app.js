addSubDomain({
  description: 'Backend for an online shopping app',
  domain: 'is-an.app',
  subdomain: 'gsts-dev-01',
  owner: {
    repo: 'https://github.com/gateway-stream/gateway_be',
    email: 'percival.rapha@gmail.com',
  },
  record: {
    A: ['34.201.17.130'],
  },
  proxy: false,
})
