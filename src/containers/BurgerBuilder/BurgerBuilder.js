import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {

    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat: 0
            
        },
        totalPrice: 4,
        purchasable: false,
        pruchasing: false

    }

    purchaseHandler=()=>{
        this.setState({pruchasing: true});
    }

    updatePuerchaseState(ingredients){
 
        const sum = Object.keys(ingredients).map(
            igKey=>{
                return ingredients[igKey];
            }
        ).reduce((sum,el)=>{
            return sum+el;
        },0);

        this.setState({purchasable:sum > 0});
        
    }
    addIngredientHandler =(type)=>{
        const oldCount = this.state.ingredient[type];
        const updatedCounted = oldCount +1;
        const updatedIngredients={
            ...this.state.ingredient
        };
        updatedIngredients[type]= updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredient: updatedIngredients });
        this.updatePuerchaseState(updatedIngredients);

        
    }

    purchaseCancelHandler=()=>{
        this.setState({pruchasing:false});
    }

    purchaseContinueHandler=()=>{
        alert('you continue!');
    }

    removeIngredientHandler= (type) =>{
        const oldCount = this.state.ingredient[type];
       if(oldCount <=0){
           return;
       }
        const updatedCounted = oldCount -1;
        const updatedIngredients={
            ...this.state.ingredient
        };
        updatedIngredients[type]= updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice = oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice, ingredient: updatedIngredients });
        this.updatePuerchaseState(updatedIngredients);
    }

    render(){
        const disabledInfo={
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        return(
            
            <Aux>
                <Modal show={this.state.pruchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredient} 
                                    purchaseCancelled={this.purchaseCancelHandler}
                                    purchaseContinue={this.purchaseContinueHandler}
                                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients ={this.state.ingredient} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemove={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               ordered={this.purchaseHandler}
                               purchasable = {this.state.purchasable}
                               price={this.state.totalPrice}/>
            </Aux>
            
        );
        
    }
} 

export default BurgerBuilder;