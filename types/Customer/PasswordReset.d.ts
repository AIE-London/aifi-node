declare module 'aifi' {
  namespace Aifi {
    namespace Customer {
      interface PasswordResetParams {
        /**
         * A randomly generated by client, unique string to indentify a single reset-code operation flow
         */
        token: string;

        /**
         * Registered aifi user email address
         */
        email: string;
      }

      interface EntryCodeSuccessResponse {
        verificationCode: string;
      }

      interface PasswordSetParams {
        /**
         * A randomly generated by client, unique string to indentify a single reset-code operation flow
         */
        token: string;

        /**
         * New password to be set as new password
         */
        password: string;
      }

      interface SuccessResponse {
        token: string;
      }

      interface EmptyResponse {}

      class PasswordResetResource {
        /**
         * Reset user password
         */
        reset(
          params: PasswordResetParams,
          options?: RequestOptions
        ): Promise<Aifi.Response<EmptyResponse>>;

        set(
          params: PasswordSetParams,
          options?: RequestOptions
        ): Promise<Aifi.Response<EmptyResponse>>;

        verify(
          params: EntryCodeCreateParams,
          options?: RequestOptions
        ): Promise<Aifi.Response<SuccessResponse | Aifi.Models.Error>>;
      }
    }
  }
}
