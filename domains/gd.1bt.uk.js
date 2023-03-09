// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Creating a reseller web hosting. Need a domain name. GD is shortened for Geometry Dash, because I know most of the people who will use this will be for making "Geometry Dash Fangame Servers"', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'gd', // desired subdomain name
  owner: {
    repo: 'https://github.com/masckmaster2007/free-domains',
    email: 'contactus@dimisaio.x10.mx',
  },
  record: {
    NS: ['ns0.1984.is', 'ns1.1984hosting.com', 'ns1.1984.is', 'ns2.1984hosting.com', 'ns2.1984.is'],
  },
  proxy: true, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
})
