import React from 'react';

function FoodSingle(props) {
  
  return (
      <div className="food-single">
            <p className="food-type-title">{props.type}</p>
            <div class="food-menu">
                <div className="food-type">
                    <div className="food-menu-title">
                        <p><span>Наименование:</span><span>Выход:</span></p>
                    </div>
                    <div className="food-menu-content">
                        {props.meals.map(meal => <p><span>{meal.food}</span><span>{meal.weight}</span></p>)}
                    </div>
                </div>
            </div>
      </div>
  );
}

export default FoodSingle;