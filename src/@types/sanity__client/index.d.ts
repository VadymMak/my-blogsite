declare module "@sanity/client" {
  export interface SanityClientOptions {
    projectId: string;
    dataset: string;
    useCdn?: boolean;
    token?: string;
  }

  export interface SanityClient {
    fetch: (query: string, params?: Record<string, unknown>) => Promise<any>;
    // Add more methods you intend to use...
  }

  export default function sanityClient(
    options: SanityClientOptions
  ): SanityClient;
}
