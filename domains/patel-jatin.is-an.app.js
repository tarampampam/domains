addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'patel-jatin',
  owner: {
    repo: 'https://github.com/patel-jatin/patel-jatin.github.io',
    email: 'jatin.patel@truestaz.com',
  },
  record: {
    CNAME: 'patel-jatin.github.io',
  },
  proxy: false,
})
