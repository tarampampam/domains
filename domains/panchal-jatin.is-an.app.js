addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'panchal-jatin',
  owner: {
    repo: 'https://github.com/panchal-jatin/panchal-jatin.github.io',
    email: 'jatin.panchal@truestaz.com',
  },
  record: {
    CNAME: 'panchal-jatin.github.io',
  },
  proxy: false,
})
