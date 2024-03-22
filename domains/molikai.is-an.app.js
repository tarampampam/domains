// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Uptime Status',
  domain: 'is-an.app',
  subdomain: 'molikai',
  owner: {
    repo: 'https://github.com/nan2xiao/uptime-status',
    email: 'aran0519@126.com',
  },
  record: {
    CNAME: 'uptime-status-c2k.pages.dev',
  },
  proxy: false,
  nested: [{
    subdomain: 'image',
    record: {
      CNAME: 'cf-telegraph-image.pages.dev',
   },
   proxy: false,
   }]
})
