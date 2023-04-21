addSubDomain({
  description: 'I want to publish my profile',
  domain: 'is-an.app',
  subdomain: 'patel-radhika',
  owner: {
    repo: 'https://github.com/patel-radhika/patel-radhika.github.io',
    email: 'radhika.patel@truestaz.com',
  },
  record: {
    CNAME: 'patel-radhika.github.io',
  },
  proxy: false,
})
