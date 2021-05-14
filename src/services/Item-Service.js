import config from '../config'
import TokenService from './Token-Service'

const ItemService = {
  createItem(itemName) {
    return fetch(`${config.SERVER_ENDPOINT}/shoppinglist`, {
      method: "post",
      body: JSON.stringify({
        item: itemName
      }),
      headers: {
        "content-type": "application/json",
        "authorization": "bearer "+TokenService.getAuthToken()
      },
    })
      .then((response) => response.json()) 
  },

  getRecipes(list){  

  const url = `?ingredients=${list}&number=8&ranking=1&ignorePantry=true`;
    

  return fetch(`${config.API_ENDPOINT}/${url}`, {
    method: "get",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": "f4d8f1ff35mshfad7c63de12d1a3p1c6153jsn7fcd7cc30aeb",
      "x-rapidapi-host":
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())

}

}



export default ItemService