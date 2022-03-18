import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components/"

function Home({items}) {
  return (
    <div className="container">
    <div className="content__top">
      <Categories 
      onClick={(name) => console.log(name)}
      items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} 
      />
      <SortPopup items={['популярности', 'цене', 'алфавиту']} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
    {items.map(item => (
        <PizzaBlock 
        key={item.id}
        {...item}
        />
    
        ))}

     </div>
    </div>

  )
}

export default Home