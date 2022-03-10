declare module 'aifi' {
  namespace Aifi {
    namespace Admin {
      class ProductsResource {
        /**
         * Retrieves an auth token.
         */
        retrieveToken(
          params: AuthTokenParams,
          options?: RequestOptions
        ): Promise<Aifi.Response<Aifi.Admin.Auth>>;
      }
    }
  }
}
