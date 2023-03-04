addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'panchal-chirag',
  owner: {
    repo: 'https://github.com/panchal-chirag/panchal-chirag.github.io',
    email: 'panchal.chirag@acquaintsofttech.com',
  },
  record: {
    CNAME: 'panchal-chirag.github.io',
  },
  proxy: false,
})
