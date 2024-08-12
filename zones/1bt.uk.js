// read more about the dnscontrol tool here: <https://docs.dnscontrol.org/>

D('1bt.uk', NewRegistrar('none'), DnsProvider(NewDnsProvider('cloudflare')), DefaultTTL(1),
  // service records
  TXT("@", "v=spf1 -all"),
  TXT("_dmarc", "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"),
  TXT("*._domainkey", "v=DKIM1; p="),

  // cloudflare redirect www to the root domain
  A("www", "192.0.2.1", CF_PROXY_ON),
  AAAA("www", "100::", CF_PROXY_ON),

  // redirect 1bt.uk -> is-an.app
  A("@", "192.0.2.1", CF_PROXY_ON),
  AAAA("@", "100::", CF_PROXY_ON),

  // subdomains, given for free previously
  CNAME("domjs", "sx-9.github.io.", CF_PROXY_ON),
  CNAME("zeusgang", "zeusgangproject.github.io.", CF_PROXY_ON),
END)
