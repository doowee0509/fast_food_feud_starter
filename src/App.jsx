import * as React from "react"
import Header from "/src/components/Header/Header"
import Instruction from "/src/components/Instructions/Instructions"
import Chip from "/src/components/Chip/Chip"
import NutritionalLabel from "/src/components/NutritionalLabel/NutritionalLabel"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [cat, setCategory] = React.useState("")
  const [res, setRestaurant] = React.useState("")
  const [clickedItem, setItem] = React.useState(null)

  const currentMenuItems = data.filter((item) => {
    return item.food_category === cat && item.restaurant === res
  })
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category) => (
            <Chip key={category} label={category} onClick={()=> setCategory(category)} isActive={cat === category} onClose={()=> setCategory("")}/>
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* YOUR CODE HERE */}
            {restaurants.map((restaurant) => (
            <Chip key={restaurant} label={restaurant} onClick={()=> setRestaurant(restaurant)} isActive={res === restaurant}/>
          ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instruction instructions={appInfo.instructions.start}/>


        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {
              currentMenuItems.map((item, i) => (
                <Chip key={item.item_name} label={item.item_name} onClick={() => setItem(item)}
                isActive={clickedItem && clickedItem.item_name === item.item_name}/>
              ))
            }
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {clickedItem ? <NutritionalLabel item={clickedItem}/> : null}
            </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
