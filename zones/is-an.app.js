// read more about the dnscontrol tool here: <https://docs.dnscontrol.org/>

D('is-an.app', NewRegistrar('none'), DnsProvider(NewDnsProvider('cloudflare')), DefaultTTL(1),
  // service records
  TXT('_dmarc', 'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;'),
  TXT('*._domainkey', 'v=DKIM1; p='),
  TXT('@', 'v=spf1 -all'),

  // cloudflare redirect www to the root domain
  A('www', '192.0.2.1', CF_PROXY_ON),
  AAAA('www', '100::', CF_PROXY_ON),

  // index page (github pages)
  A('@', '185.199.111.153'),
  A('@', '185.199.110.153'),
  A('@', '185.199.109.153'),
  A('@', '185.199.108.153'),
  AAAA('@', '2606:50c0:8003::153'),
  AAAA('@', '2606:50c0:8002::153'),
  AAAA('@', '2606:50c0:8001::153'),
  AAAA('@', '2606:50c0:8000::153'),

  // subdomains, given for free previously
  A('medlexo', '185.27.134.137', CF_PROXY_ON),
  CNAME('abhirockz', 'yopremium21.github.io.'),
  CNAME('aviana', 'cname.vercel-dns.com.'),
  CNAME('azumi', 'azumi-development.github.io.', CF_PROXY_ON),
  CNAME('blog.azumi', 'hashnode.network.'),
  CNAME('docs.azumi', 'azumidocs.github.io.'),
  CNAME('cat', 'cname.vercel-dns.com.'),
  CNAME('codedit', 'cname.vercel-dns.com.', CF_PROXY_ON),
  CNAME('devprofiles', 'cname.vercel-dns.com.'),
  CNAME('devtweet', 'cname.vercel-dns.com.'),
  CNAME('dishdiscovery', 'cname.vercel-dns.com.'),
  CNAME('flier', 'cname-china.vercel-dns.com.'),
  CNAME('geo', 'gopirathod.github.io.'),
  CNAME('gravity', 'cname.vercel-dns.com.', CF_PROXY_ON),
  CNAME('indexer', 'oshekharo.github.io.'),
  CNAME('linkkar', 'cname.vercel-dns.com.', CF_PROXY_ON),
  CNAME('lunaori', 'app-220.pages.dev.'),
  CNAME('morpion', 'nonolanlan1007.github.io.'),
  CNAME('nikudizer', 'fabiusbile.github.io.', CF_PROXY_ON),
  CNAME('oop', 'sergeyverevkin.github.io.'),
  CNAME('postit', 'cname.vercel-dns.com.', CF_PROXY_ON),
  CNAME('qwertx', 'notqwertz.github.io.'),
  CNAME('rewards', 'legendsayantan.github.io.'),
  CNAME('samyakgptui', 'cname.vercel-dns.com.', CF_PROXY_ON),
  CNAME('shredmod', 'shredmod.github.io.', CF_PROXY_ON),
  CNAME('smp', 'yandao0313.github.io.'),
  CNAME('snapscript', 'cname.vercel-dns.com.'),
  CNAME('yt2mp3', 'cname.vercel-dns.com.'),
END)
