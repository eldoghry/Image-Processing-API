import { promises as fsPromises } from 'fs';

const createAssetDirectories = async () => {
  try {
    await fsPromises.mkdir(process.env.ASSETS_DIR as string, { recursive: true });
    await fsPromises.mkdir(process.env.THUMBS_DIR as string, { recursive: true });
    await fsPromises.mkdir(process.env.FULL_DIR as string, { recursive: true });
  } catch (error) {
    console.log('⛔ cannot create assets directories');
  }
};

export default createAssetDirectories;
