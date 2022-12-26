var regNone = NewRegistrar("none")
var providerCf = DnsProvider(NewDnsProvider("cloudflare"))

var proxy = { // https://stackexchange.github.io/dnscontrol/providers/cloudflare
  on: {"cloudflare_proxy": "on"},
  off: {"cloudflare_proxy": "off"}
}

/**
 * Note: glob() is only an internal undocumented helper function (maybe risky).
 *
 * @param {String} filesPath
 * @returns {ISubDomain[]}
 */
function getDomainsList(filesPath) {
  var result = []
  var files = glob.apply(null, [filesPath, true, '.json'])

  for (var i = 0; i < files.length; i++) {
    var basename = files[i].split('/').reverse()[0]
    var name = basename.split('.')[0]

    result.push({name: name, data: require(files[i])})
  }

  return result
}

var domains = getDomainsList('./domains')

/**
 * @type {{}}
 */
var commit = {}

for (var i in domains) {
  var domainData = domains[i].data
  var domainName = domainData.domain
  var proxyState = proxy.on // enabled by default

  if (!commit[domainName]) {
    commit[domainName] = []
  }

  if (domainData.proxy === false) {
    proxyState = proxy.off
  }

  if (domainData.record.TXT) {
    for (var txt in domainData.record.TXT) {
      commit[domainName].push(
        TXT(domainData.subdomain, domainData.record.TXT[txt])
      )
    }
  }

  if (domainData.record.CNAME) {
    var cname = domainData.record.CNAME.replace(/\.+$/, '') + '.'

    commit[domainName].push(
      CNAME(domainData.subdomain, cname, proxyState)
    )
  }

  if (domainData.record.A) {
    for (var a in domainData.record.A) {
      commit[domainName].push(
        A(domainData.subdomain, IP(domainData.record.A[a]), proxyState)
      )
    }
  }

  if (domainData.record.AAAA) {
    for (var aaaa in domainData.record.AAAA) {
      commit[domainName].push(
        AAAA(domainData.subdomain, domainData.record.AAAA[aaaa], proxyState)
      )
    }
  }

  if (domainData.record.NS) {
    for (var ns in domainData.record.NS) {
      commit[domainName].push(
        NS(domainData.subdomain, domainData.record.NS[ns])
      )
    }
  }

  if (domainData.nested) {
    for (var k in domainData.nested) {
      var nestedData = domainData.nested[k]
      var nestedSubdomain = [nestedData.subdomain, domainData.subdomain].join('.')
      var nestedProxyState = proxy.on // enabled by default

      if (nestedData.proxy === false) {
        nestedProxyState = proxy.off
      }

      if (nestedData.record.TXT) {
        for (var nestedTxt in nestedData.record.TXT) {
          commit[domainName].push(
            TXT(nestedSubdomain, nestedData.record.TXT[nestedTxt])
          )
        }
      }

      if (nestedData.record.CNAME) {
        var nestedCname = nestedData.record.CNAME.replace(/\.+$/, '') + '.'

        commit[domainName].push(
          CNAME(nestedSubdomain, nestedCname, nestedProxyState)
        )
      }

      if (nestedData.record.A) {
        for (var nestedA in nestedData.record.A) {
          commit[domainName].push(
            A(nestedSubdomain, IP(nestedData.record.A[nestedA]), nestedProxyState)
          )
        }
      }

      if (nestedData.record.AAAA) {
        for (var nestedAAA in nestedData.record.AAAA) {
          commit[domainName].push(
            AAAA(nestedSubdomain, nestedData.record.AAAA[nestedAAA], nestedProxyState)
          )
        }
      }

      if (nestedData.record.NS) {
        for (var nestedNS in nestedData.record.NS) {
          commit[domainName].push(
            NS(nestedSubdomain, nestedData.record.NS[nestedNS])
          )
        }
      }
    }
  }
}

for (var resultDomainName in commit) {
  D(resultDomainName, regNone, providerCf, commit[resultDomainName])
}
