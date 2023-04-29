export type PlaceData = {
  id: string;
  name: string;
  image: string;
  description: string;
  facts: string[];
};

export interface HomeProps {
  cities: PlaceData[];
  treks: PlaceData[];
}
