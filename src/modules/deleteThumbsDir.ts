import { promises as fsPromises } from 'fs';
import path from 'path';

export default async () => {
  await fsPromises.rm(path.resolve(process.env.THUMBS_DIR as string), { recursive: true, force: true });
};
