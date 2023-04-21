addSubDomain({
  description: '[FORK] SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.',
  domain: 'is-an.app',
  subdomain: 'searxng',
  owner: {
      repo: 'https://github.com/iamrony777/searxng',
      email: 'iamrony777@proton.me'
  },
  record: {
      CNAME: 'ingress.patr.cloud',
      TXT: ['07f8ac61cf794552924abd5ecb6f8186']
  }
})