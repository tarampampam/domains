addSubDomain({
  description: 'my personal site',
  domain: '1bt.uk',
  subdomain: 'thirst',
  owner: {
    repo: 'https://github.com/caffein3/caffein3.github.io',
    email: 'sketched@disroot.org',
  },
  record: {
    CNAME: 'vanilla-html.pages.dev',
  },
  proxy: true,
})
