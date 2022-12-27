type TRegistrar = unknown;
type TDnsProvider = unknown;
type TDnsRecord = unknown;
type TRecordModifiers = {[key: string]: unknown};

interface IRecord {
  TXT?: string[]
  A?: string[]
  AAAA?: string[]
  CNAME?: string
  NS?: string[]
}

interface ISubDomain {
  name: string
  data: {
    description: string
    domain: string
    subdomain: string
    owner?: {
      repo?: string
      email?: string
    }
    record: IRecord
    proxy?: boolean
    nested?: {
      subdomain: string
      record: IRecord
      proxy?: boolean
    }[]
  }
}

declare global {
  /**
   * Returns an registrar object
   * @link https://stackexchange.github.io/dnscontrol/js#NewRegistrar
   * @constructor
   */
  function NewRegistrar(name: string): TRegistrar;

  /**
   * Indicates that the specified provider should be used to manage records for this domain.
   * @link https://stackexchange.github.io/dnscontrol/js#DnsProvider
   * @constructor
   */
  function DnsProvider(p: TDnsProvider): TDnsProvider;

  /**
   * Activates a DNS Service Provider (DSP).
   * @link https://stackexchange.github.io/dnscontrol/js#NewDnsProvider
   */
  function NewDnsProvider(name: string, type?: string, meta?: { [key: string]: unknown }): TDnsProvider;

  /** Internal function. */
  function require(path: string): unknown;

  /**
   * Converts an IPv4 address from string to an integer.
   * @link https://stackexchange.github.io/dnscontrol/js#IP
   */
  function IP(ip: string): number;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#TXT
   */
  function TXT(name: string, contents: string | string[], modifiers?: TRecordModifiers): TDnsRecord;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#CNAME
   */
  function CNAME(name: string, contents: string, modifiers?: TRecordModifiers): TDnsRecord;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#A
   */
  function A(name: string, contents: string | number, modifiers?: TRecordModifiers): TDnsRecord;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#AAAA
   */
  function AAAA(name: string, contents: string, modifiers?: TRecordModifiers): TDnsRecord;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#NS
   */
  function NS(name: string, contents: string, modifiers?: TRecordModifiers): TDnsRecord;

  /**
   * @link https://stackexchange.github.io/dnscontrol/js#D
   */
  function D(name: string, registrar: TRegistrar, ...modifiers: unknown[]): TDnsRecord;
}

export {}
