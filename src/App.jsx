import * as React from "react"
import Header from "/src/components/Header/Header"
import Instruction from "/src/components/Instructions/Instructions"
import CategoriesColumn from "./components/CategoriesColumn"
import DataSource from "./components/DataSource"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import RestaurantsRows from "./components/RestaurantsRow"
import MenuDisplay from "./components/MenuDisplay"

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
      <CategoriesColumn categories={categories} setter={setCategory} cat={cat}/>
      <div className="container">
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        <RestaurantsRows restaurants={restaurants} setter={setRestaurant} res={res}/>
        <Instruction instructions={appInfo.instructions.start}/>
        <MenuDisplay clickedItem={clickedItem} setter={setItem} item={currentMenuItems}/>
        <DataSource data={appInfo}/>
      </div>
    </main>
  )
}

export default App
