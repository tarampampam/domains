addSubDomain({
  description: 'Creating a reseller web hosting. Need a domain name. GD is shortened for Geometry Dash, because I know most of the people who will use this will be for making "Geometry Dash Fangame Servers"',
  domain: '1bt.uk',
  subdomain: 'gd',
  owner: {
    repo: 'https://github.com/masckmaster2007/free-domains',
    email: 'contactus@dimisaio.x10.mx',
  },
  record: {
    A: ['141.145.198.45'],
    NS: ['ns1.gd.1bt.uk'],
  },
  proxy: false,
    nested: [{
  subdomain: 'ns1',
  record: {
 A: ['141.145.198.45'],
  },
  proxy: false,
  }]
})
