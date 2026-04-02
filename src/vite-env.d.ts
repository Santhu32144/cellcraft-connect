/// <reference types="vite/client" />

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.asset.json" {
  const value: { url: string };
  export default value;
}
