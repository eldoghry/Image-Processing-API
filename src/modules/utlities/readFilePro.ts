import { promises as fsPromises } from 'fs';

export default function (path: string) {
  return fsPromises.readFile(path);
}
