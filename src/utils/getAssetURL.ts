export default (path: string) => new URL(path, import.meta.url).href;
