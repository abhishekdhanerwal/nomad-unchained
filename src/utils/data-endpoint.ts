import fs from 'fs';
import path from 'path';
import util from 'util';
import { PlaceData } from '@/components/types';

const getList = async (fileName: string) => {
  const filePath = path.join(process.cwd(), 'src', 'data', fileName);
  const jsonData = await util.promisify(fs.readFile)(filePath, 'utf8');
  const data = JSON.parse(jsonData) as PlaceData[];
  return data;
};

export const getCityList = async () => {
  return await getList('cities.json');
};

export const getAcitvitiesList = async () => {
  return await getList('adventure-activities.json');
};

export const getHomeList = async () => {
  const response = await Promise.all([getCityList(), getAcitvitiesList()]);

  return { city: response[0], treks: response[1] };
};
