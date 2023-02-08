/** @type {ISubDomain[]} */
var subDomains = []

var validate = new function () {
  /**
   * @param {*|string} domain
   * @returns {boolean}
   */
  this.domain = function (domain) {
    return typeof domain === 'string' && (domain === '1bt.uk' || domain === 'is-an.app')
  }

  /**
   * @param {*|string} description
   * @returns {boolean}
   */
  this.description = function (description) {
    return typeof description === 'string' && description.length > 4
  }

  /**
   * @param {*|string} subDomain
   * @returns {boolean}
   */
  this.subDomain = function (subDomain) {
    if (typeof subDomain !== 'string') {
      return false
    }

    if (subDomain.length < 2 && subDomain !== '@') {
      return false
    }

    if (subDomain.length > 63) {
      return false
    }

    return /([a-zA-Z0-9_*.-]{2,64}|@)$/.test(subDomain) !== false;
  }

  /**
   * @param {*|string} txt
   * @returns {boolean}
   */
  this.txt = function (txt) {
    return typeof txt === 'string' && (txt.length > 0 && txt.length <= 255)
  }

  /**
   * @param {*|string} a
   * @returns {boolean}
   */
  this.a = function (a) {
    return typeof a === 'string' && /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(a)
  }

  /**
   * @param {*|string} aaaa
   * @returns {boolean}
   */
  this.aaaa = function (aaaa) {
    return typeof aaaa === 'string' && /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))$/.test(aaaa)
  }

  /**
   * @param {*|string} cname
   * @returns {boolean}
   */
  this.cname = function (cname) {
    return typeof cname === 'string' && /^[a-zA-Z0-9_./-]{2,}$/.test(cname)
  }

  /**
   * @param {*|string} ns
   * @returns {boolean}
   */
  this.ns = function (ns) {
    return typeof ns === 'string' && /^[a-zA-Z0-9._-]{3,}$/.test(ns)
  }
}

/**
 * Register a new subdomain.
 *
 * @param {ISubDomain} data
 * @throws {Error} On invalid data
 */
function addSubDomain(data) {
  if (typeof data !== 'object') {
    throw new Error('Invalid subdomain data (must be an object)')
  }

  // validate domain
  if (!validate.domain(data.domain)) {
    throw new Error('Invalid domain name: "' + data.domain + '"')
  }

  // validate description
  if (!validate.description(data.description)) {
    throw new Error('Invalid subdomain description: "' + data.description + '"')
  }

  // validate subdomain
  if (!validate.subDomain(data.subdomain)) {
    throw new Error('Invalid subdomain name: "' + data.subdomain + '"')
  }

  data.subdomain = data.subdomain.toLowerCase().trim() // normalize

  var subdomainsBlacklist = [
    "*", "a11y", "about", "account", "accounts", "ad", "ads", "admin", "admins", "answer", "answers", "apis", "app",
    "apps", "archive", "archives", "array", "arrays", "asm", "async", "awesome", "backup", "backups", "base", "basic",
    "basics", "blogs", "book", "books", "bot", "bots", "browser", "browsers", "bug", "bugs", "build", "builds",
    "business", "career", "cdn", "center", "chat", "chats", "client", "clients", "cloud", "code", "company", "console",
    "contact", "contacts", "cookie", "cookies", "copyright", "copyrights", "core", "css", "data", "db", "ddns", "deal",
    "debug", "demo", "demos", "dev", "devs", "develop", "developer", "developers", "dir", "dirs", "dns", "domain",
    "domains", "donate", "dyn", "ecma", "editor", "email", "emails", "es2015", "faq", "faqs", "feed", "file", "find",
    "free", "front", "ftp", "function", "functions", "fund", "funds", "game", "games", "get", "git", "global",
    "globals", "group", "groups", "headquarter", "help", "home", "homepage", "host", "hq", "html", "i18n", "imap",
    "index", "info", "io", "js", "json", "l10n", "legal", "legals", "libraries", "lib", "license", "licenses", "like",
    "link", "live", "log", "logs", "login", "logo", "logos", "logout", "loop", "love", "mail", "main", "map", "maps",
    "market", "master", "media", "meet", "member", "members", "mobile", "mobiles", "mx", "my", "native", "net",
    "network", "now", "ns", "ns1", "ns2", "online", "open", "orig", "origin", "page", "pages", "password", "passwords",
    "permalink", "permalinks", "plain", "pop3", "portal", "portals", "pub", "pubs", "raw", "readme", "regex",
    "register", "registration", "remote", "rest", "root", "roots", "rss", "run", "script", "scripts", "secure", "serv",
    "server", "servers", "service", "services", "shop", "shops", "site", "sites", "smtp", "socket", "source",
    "sources", "ssh", "standard", "standards", "store", "stores", "sub", "subs", "subdomain", "subdomains",
    "subscribe", "support", "sync", "system", "systems", "tag", "tags", "team", "teams", "tech", "terminal", "test",
    "this", "that", "tip", "tool", "tools", "topic", "topics", "translate", "trend", "trends", "trick", "tricks",
    "trust", "trusted", "tutorial", "tutorials", "tweak", "tweaks", "type", "types", "unit", "units", "united",
    "unsubscribe", "uri", "uris", "url", "urls", "user", "users", "util", "utils", "utility", "validate", "var",
    "vars", "virtual", "vpn", "vps", "wasm", "watch", "web", "webmail", "webmaster", "world", "ww", "ww1", "ww2",
    "ww3", "www1", "www2", "www3", "xml",
  ]

  for (var i = 0; i < subdomainsBlacklist.length; i++) {
    if (data.subdomain === subdomainsBlacklist[i]) {
      throw new Error('Denied subdomain name: "' + data.subdomain + '"')
    }
  }

  // validate owner
  if (typeof data.owner === 'object') {
    if (data.owner.repo !== undefined && typeof data.owner.repo !== 'string') {
      throw new Error('Invalid owner repo property (must be a string)')
    }

    if (data.owner.email !== undefined && typeof data.owner.email !== 'string') {
      throw new Error('Invalid owner email property (must be a string)')
    }
  }

  if (typeof data.proxy !== 'boolean') {
    data.proxy = true // enabled by default
  }

  // validate record
  if (typeof data.record !== 'object') {
    throw new Error('Invalid subdomain "record" property (must be an object)')
  } else {
    if (Array.isArray(data.record.TXT)) {
      if (!data.record.TXT.every(validate.txt)) {
        throw new Error('TXT records must be an array of non-empty strings')
      }
    }

    if (Array.isArray(data.record.A)) {
      if (!data.record.A.every(validate.a)) {
        throw new Error('A records must be an array of valid IPv4 addresses')
      }
    }

    if (Array.isArray(data.record.AAAA)) {
      if (!data.record.AAAA.every(validate.aaaa)) {
        throw new Error('AAAA records must be an array of valid IPv6 addresses')
      }
    }

    if (typeof data.record.CNAME === 'string') {
      if (!validate.cname(data.record.CNAME)) {
        throw new Error('Invalid CNAME record: "' + data.record.CNAME + '"')
      } else {
        data.record.CNAME = data.record.CNAME.toLowerCase().replace(/\.+$/, '') + '.' // normalize and add trailing dot
      }
    }

    if (Array.isArray(data.record.NS)) {
      if (!data.record.NS.every(validate.ns)) {
        throw new Error('NS records must be an array of valid domain names')
      } else {
        data.record.NS = data.record.NS.map(function (ns) {
          return ns.toLowerCase().replace(/\.+$/, '') + '.' // normalize and add trailing dot
        })
      }
    }
  }

  // validate nested subdomains
  if (Array.isArray(data.nested)) {
    for (var i = 0; i < data.nested.length; i++) {
      if (!validate.subDomain(data.nested[i].subdomain)) {
        throw new Error('Invalid nested subdomain name: "' + data.nested[i].subdomain + '"')
      }

      data.nested[i].subdomain = data.nested[i].subdomain.toLowerCase().trim() // normalize

      if (typeof data.nested[i].proxy !== 'boolean') {
        data.nested[i].proxy = true // enabled by default
      }

      if (Array.isArray(data.nested[i].record.TXT)) {
        if (!data.nested[i].record.TXT.every(validate.txt)) {
          throw new Error('TXT records must be an array of non-empty strings')
        }
      }

      if (Array.isArray(data.nested[i].record.A)) {
        if (!data.nested[i].record.A.every(validate.a)) {
          throw new Error('A records must be an array of valid IPv4 addresses')
        }
      }

      if (Array.isArray(data.nested[i].record.AAAA)) {
        if (!data.nested[i].record.AAAA.every(validate.aaaa)) {
          throw new Error('AAAA records must be an array of valid IPv6 addresses')
        }
      }

      if (typeof data.nested[i].record.CNAME === 'string') {
        if (!validate.cname(data.nested[i].record.CNAME)) {
          throw new Error('Invalid CNAME record: "' + data.nested[i].record.CNAME + '"')
        } else {
          data.nested[i].record.CNAME = data.nested[i].record.CNAME.toLowerCase().replace(/\.+$/, '') + '.' // normalize and add trailing dot
        }
      }

      if (Array.isArray(data.nested[i].record.NS)) {
        if (!data.nested[i].record.NS.every(validate.ns)) {
          throw new Error('NS records must be an array of valid domain names')
        } else {
          data.nested[i].record.NS = data.nested[i].record.NS.map(function (ns) {
            return ns.toLowerCase().replace(/\.+$/, '') + '.' // normalize and add trailing dot
          })
        }
      }
    }
  }

  subDomains.push(data)
}

require_glob('./domains/', true)

/** @type {Object.<String, DomainModifier[]>} */
var commit = {}

subDomains.forEach(function (subDomain) {
  if (commit[subDomain.domain] === undefined) { // initialize domain
    commit[subDomain.domain] = []
  }

  var proxy = subDomain.proxy ? CF_PROXY_ON : CF_PROXY_OFF

  if (subDomain.record.TXT) {
    subDomain.record.TXT.forEach(function (txt) {
      commit[subDomain.domain].push(TXT(subDomain.subdomain, txt))
    })
  }

  if (subDomain.record.A) {
    subDomain.record.A.forEach(function (a) {
      commit[subDomain.domain].push(A(subDomain.subdomain, a, proxy))
    })
  }

  if (subDomain.record.AAAA) {
    subDomain.record.AAAA.forEach(function (aaaa) {
      commit[subDomain.domain].push(AAAA(subDomain.subdomain, aaaa, proxy))
    })
  }

  if (subDomain.record.CNAME) {
    commit[subDomain.domain].push(CNAME(subDomain.subdomain, subDomain.record.CNAME, proxy))
  }

  if (subDomain.record.NS) {
    subDomain.record.NS.forEach(function (ns) {
      commit[subDomain.domain].push(NS(subDomain.subdomain, ns))
    })
  }

  if (subDomain.nested) {
    subDomain.nested.forEach(function (nested) {
      var nestedSubdomain = [nested.subdomain, subDomain.subdomain].join('.')
      var nestedProxy = nested.proxy ? CF_PROXY_ON : CF_PROXY_OFF

      if (nested.record.TXT) {
        nested.record.TXT.forEach(function (txt) {
          commit[subDomain.subdomain].push(TXT(nestedSubdomain, txt))
        })
      }

      if (nested.record.A) {
        nested.record.A.forEach(function (a) {
          commit[subDomain.subdomain].push(A(nestedSubdomain, a, nestedProxy))
        })
      }

      if (nested.record.AAAA) {
        nested.record.AAAA.forEach(function (aaaa) {
          commit[subDomain.subdomain].push(AAAA(nestedSubdomain, aaaa, nestedProxy))
        })
      }

      if (nested.record.CNAME) {
        commit[subDomain.subdomain].push(CNAME(nestedSubdomain, nested.record.CNAME, nestedProxy))
      }

      if (nested.record.NS) {
        nested.record.NS.forEach(function (ns) {
          commit[subDomain.subdomain].push(NS(nestedSubdomain, ns))
        })
      }
    })
  }
})

for (var domainName in commit) {
  D(domainName, NewRegistrar('none'), DnsProvider(NewDnsProvider('cloudflare')), commit[domainName])
}
