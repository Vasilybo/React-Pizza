import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components/"
import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'},
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeItem={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    onClickSortBy={onSelectSortType}
                    activeSortType={sortBy}
                    items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(item =>
                        <PizzaBlock
                            key={item.id}
                            isLoaded={true}
                            {...item}
                        />)
                    : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>

    )
}

export default Home