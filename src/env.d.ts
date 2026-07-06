/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.JPG' {
  const value: import('astro:assets').ImageMetadata;
  export default value;
}

declare module '*.PNG' {
  const value: import('astro:assets').ImageMetadata;
  export default value;
}

declare module '*.JPEG' {
  const value: import('astro:assets').ImageMetadata;
  export default value;
}

declare module '*.mov' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}
