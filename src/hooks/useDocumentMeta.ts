import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useDocumentMeta(meta: DocumentMeta) {
  useEffect(() => {
    document.title = meta.title;

    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) ||
               document.querySelector(`meta[name="${property}"]`);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMeta('description', meta.description);
    setMeta('og:title', meta.ogTitle || meta.title);
    setMeta('og:description', meta.ogDescription || meta.description);
    if (meta.ogUrl) setMeta('og:url', meta.ogUrl);
    if (meta.ogImage) setMeta('og:image', meta.ogImage);
    setMeta('twitter:title', meta.ogTitle || meta.title);
    setMeta('twitter:description', meta.ogDescription || meta.description);
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.ogUrl]);
}
