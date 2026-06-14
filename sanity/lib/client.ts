export const sanityClient = {
  async fetch<T = unknown>(_query: string, _params?: Record<string, unknown>): Promise<T[]> {
    return [];
  },
};
