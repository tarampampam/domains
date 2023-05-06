 addSubDomain({
  description: 'Personal site for IPXE boot via http',
  domain: '1bt.uk',
  subdomain: 'woa7',
  owner: {
    repo: 'https://github.com/woa7/woa7.github.io/',
    email: 'woa7woa7+1bt.uk-tarampampam-free-domains@gmail.com',
  },
  record: {
    CNAME: 'woa7.github.io',
  },
  nested: [
    {
      subdomain: 'boot',
      record: {
        CNAME: 'woa7.github.io',
      },
      proxy: false,
    },
    {
      subdomain: 'ipxe',
      record: {
        CNAME: 'woa7.github.io',
      },
      proxy: false,
    },
  ],
})
