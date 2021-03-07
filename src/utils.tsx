import {Category} from './interfaces/templates';;
const axios = require('axios');

const baseurl = 'https://opentdb.com/api.php';
export async function getCategories() {
    try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        return response;
      } catch (error) {
        console.error(error);
        return;
      }
}

const getKeyByValue = (categories: Category[], category: string) => {
    return categories.filter((item: Category) => item.name === category);
}

export async function generateQuiz(values: any, categories: Category[]) {
    let url;
    const {amount, type, difficulty, category} = values;

    url = `${baseurl}/?amount=${amount}&difficulty=${difficulty}`;

    //add type to url
    if(type !== "any") {
        url = `${url}&type=${type}`;
    }

    //add category
    if(category !== "any") {
        const key = getKeyByValue(categories, category);
        url = `${url}&category=${key[0].id}`
    }

    try {
        const response = await axios.get(url);
        return response;
      } catch (error) {
        console.error(error);
        return;
      }
}

export function getOptions(correct_answer: string, incorrect_answers: string[]) {
  const rand_index = Math.random() * (incorrect_answers.length + 1);
  const options = [...incorrect_answers];
  options.splice(rand_index, 0, correct_answer);
  return options;
}