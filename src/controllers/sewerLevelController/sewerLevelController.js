import { getApiData } from "../../modules/sewerlevelData.js";

export const getTest = async (req, res) => {
  const { gu } = req.query;

  try {
    const result = await getApiData(gu);

    res.json(result);
  } catch (error) {
    console.error(error);
  }
};
