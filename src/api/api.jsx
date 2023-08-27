import axios from "axios";

const baseUrl = "https://www.themealdb.com/api/";

async function getListMeals() {
  try {
    const response = await axios.get(`${baseUrl}json/v1/1/categories.php`);
    return response.data.categories;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function getCategoriesMeals(strCategory) {
  try {
    const response = await axios.get(
      `${baseUrl}json/v1/1/filter.php?c=${strCategory}`
    );
    return response.data.meals;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { getListMeals, getCategoriesMeals };
