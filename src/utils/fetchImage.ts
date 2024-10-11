import { storage } from '../firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

export const fetchImage = async (folderPath: string): Promise<string[]> => {
  try {
    const folderRef = ref(storage, `${folderPath}`);
    const res = await listAll(folderRef);

    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );
    return urls;
  } catch (error) {
    console.error('Error fetching images: ', error);
    return [];
  }
};
