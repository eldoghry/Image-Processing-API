//inspired by https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
import express from 'express';

declare module 'express' {
  interface Request {
    image?: {
      filename: string;
      width?: number;
      height?: number;
      ext?: string;
      path?: string;
      isExist: boolean;
    };
  }
}
