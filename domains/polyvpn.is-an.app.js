addSubDomain({
  description: 'VPN Project',
  domain: 'is-an.app',
  subdomain: 'polyvpn',
  owner: {
    email: 'polyanthi_pumicing@aleeas.com', // if needed discord contact, https://discord.gg/ux4Dkerw2h or 'polyanthi' on discord
  },
  record: {
    NS: ['ns1.hostry.com', 'ns2.hostry.com', 'ns3.hostry.com', 'ns4.hostry.com'],
  },
  proxy: false,
})
