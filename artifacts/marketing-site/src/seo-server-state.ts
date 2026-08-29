export interface ServerSeoState {
  title: string;
  description: string;
  canonical: string;
  noindex: boolean;
  image: string;
  schema: unknown;
}

let currentSeo: ServerSeoState | null = null;

export function resetServerSeo() {
  currentSeo = null;
}

export function setServerSeo(seo: ServerSeoState) {
  currentSeo = seo;
}

export function consumeServerSeo() {
  const seo = currentSeo;
  currentSeo = null;
  return seo;
}