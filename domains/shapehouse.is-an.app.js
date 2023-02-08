addSubDomain({
  description: 'shapehouse, a way to broadcast yourself',
  domain: 'is-an.app',
  subdomain: 'shapehouse',
  owner: {
    repo: 'https://github.com/shapehouse/shapehouse',
    email: 'hello@creater.uu.me',
  },
  record: {
    NS: [
      'ns1.byet.org.',
      'ns2.byet.org.',
      'ns3.byet.org.',
      'ns4.byet.org.',
    ],
  },
  proxy: false,
})
