addSubDomain({
  description: 'VPN Project',
  domain: 'is-an.app',
  subdomain: 'polyvpn',
  owner: {
    email: 'polyanthi_pumicing@aleeas.com', // if needed discord contact, https://discord.gg/ux4Dkerw2h
  },
  record: {
    NS: ['ns1.desec.io', 'ns2.desec.org'],
  },
  proxy: false,
})
