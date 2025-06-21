import { PaginatedResponse } from "@/modules/common/models";
import { http } from "@/services/api";
import { characterAdapter } from "../adapter/CharacterAdapter";
import { Character, CharacterDTO } from "../models";

export const getCharacters = async (
  url: string = "/character"
): Promise<{
  data: Character[];
  nextPageUrl: string | null;
}> => {
  try {
    const response = await http.get<PaginatedResponse<CharacterDTO>>(url);
    console.log(response);
    const adapted = characterAdapter(response.data.results);
    return {
      data: adapted,
      nextPageUrl: response.data.info.next,
    };
  } catch {
    return {
      data: [],
      nextPageUrl: null,
    };
  }
};
