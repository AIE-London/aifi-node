declare module 'aifi' {
  namespace Aifi {
    namespace Admin {
      interface ConfigResponse extends Aifi.Models.AccessToken {
        currency: {
          /**
           * Description of currency configuration
           */
          description: string;
          /**
           * Current currency code, 'USD', 'CNY', etc...
           */
          code: string;

          /**
           * Current currency symbol, $, £, etc...
           */
          symbol: string;
        };
      }
      class ConfigResource {
        /**
         * Retrieves an auth token.
         */
        retrief(
          options?: RequestOptions
        ): Promise<Aifi.Response<ConfigResponse>>;
      }
    }
  }
}
