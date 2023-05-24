import { CatImg } from "../ts/models/cat.model";
import { API } from "./apiSettings";

export async function getImgs(numImgs: number): Promise<CatImg[]> {
  try {
    const { data } = await API<CatImg[]>(`images/search?limit=${numImgs}`);
    const cats: CatImg[] = data.map((cat) => {
      return {
        id: cat.id,
        url: cat.url,
      };
    });
    return cats;
  } catch (error) {
    console.log(error);
    return [];
  }
}
