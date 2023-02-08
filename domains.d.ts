/**
 * DNS record configuration.
 */
interface IRecord {
  /**
   * Originally for arbitrary human-readable text in a DNS record. Since the early 1990s, however, this record more
   * often carries machine-readable data, such as specified by RFC 1464, opportunistic encryption, Sender Policy
   * Framework, DKIM, DMARC, DNS-SD, etc.
   */
  TXT?: string[]

  /**
   * Returns a 32-bit IPv4 address, most commonly used to map hostnames to an IP address of the host, but it is also
   * used for DNSBLs, storing subnet masks in RFC 1101, etc.
   */
  A?: string[]

  /** Returns a 128-bit IPv6 address, most commonly used to map hostnames to an IP address of the host. */
  AAAA?: string[]

  /** Alias of one name to another: the DNS lookup will continue by retrying the lookup with the new name. */
  CNAME?: string

  /** Delegates a DNS zone to use the given authoritative name servers. */
  NS?: string[]
}

/**
 * Subdomain configuration.
 */
interface ISubDomain {
  /** Describe your project in this field. */
  description: string

  /** Select the required root domain. */
  domain: '1bt.uk' | 'is-an.app'

  /** The subdomain you want to use (e.g.: "foo" means "foo.example.com"). */
  subdomain: string

  /** Subdomain owner information. */
  owner?: {
    /** URL to the repository where project source code is located. */
    repo?: string

    /** Email address (for example, for sending notifications in future). */
    email?: string
  }

  /** DNS record configuration. */
  record: IRecord

  /** Enable Cloudflare proxy for this subdomain or not. */
  proxy?: boolean

  /** Nested subdomains configuration. */
  nested?: {
    /** The nested subdomain name (e.g.: "bar" means "bar.foo.example.com"). */
    subdomain: string

    /** Nested subdomain DNS record configuration. */
    record: IRecord

    /** Enable Cloudflare proxy for this subdomain or not. */
    proxy?: boolean
  }[]
}
