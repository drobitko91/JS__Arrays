'use strict'


// norma

let shoppingList = [
    { name: 'хліб', amount: 1, alreadyBought: false, price: 22, totalPrice: 22 },
    { name: 'молоко', amount: 2, alreadyBought: true, price: 35, totalPrice: 70 },
    {
      name: 'шоколад',
      amount: 5,
      alreadyBought: true,
      price: 30,
      totalPrice: 150,
    },
    {
      name: 'шоколад',
      amount: 1,
      alreadyBought: false,
      price: 35,
      totalPrice: 35,
    },
  ];
  
  const showShoppingList = () => {
    console.log(
      shoppingList.sort((a, b) => {
        if (a.alreadyBought < b.alreadyBought) return -1;
        if (a.alreadyBought > b.alreadyBought) return 1;
        return 0;
      })
    );
  };
  
  // showShoppingList();
  
  // const buy = (name) => {
  //   shoppingList.forEach((element) => {
  //     if (element.name === name) element.alreadyBought = true;
  //   });
  // };
  
  const buy = (name) => {
    const initialValue = [];
  
    const filteredShoppingList = shoppingList.reduce(
      (accumulator, currentItem) => {
        if (currentItem.name === name) {
          let updatedItem = { ...currentItem, alreadyBought: true };
          return [...accumulator, updatedItem];
        }
  
        return [...accumulator, currentItem];
      },
      initialValue
    );
  
    shoppingList = filteredShoppingList;
  };
  
  // buy('хліб');
  // buy('сало');
  // console.log(shoppingList);
  
//   norma
  
  const deleteShoppingItem = (name) => {
    const filterByName = (element) => {
      return element.name.toUpperCase() !== name.toUpperCase();
    };
  
    console.log(shoppingList.filter(filterByName));
  };
  
  // deleteShoppingItem('ХлІб');
  
  const addShoppingItem = (newItem) => {
    let itemFound = false;
  
    shoppingList.forEach((element) => {
      if (element.name === newItem.name && element.price === newItem.price) {
        element.amount += newItem.amount;
        element.totalPrice += newItem.price * newItem.amount;
        itemFound = true;
      }
    });
  
    if (!itemFound) {
      newItem.alreadyBought = false;
      newItem.totalPrice = newItem.price * newItem.amount;
      shoppingList.push(newItem);
    }
  
    console.log(shoppingList);
  };
  
  // addShoppingItem({
  //   name: 'шоколад',
  //   amount: 1,
  //   price: 30,
  // });
  // addShoppingItem({
  //   name: 'горіхи',
  //   amount: 2,
  //   price: 50,
  // });
  
//   minimum
  
  const getShoppingTotalPrice = () => {
    let sum = 0;
  
    shoppingList.forEach((element) => {
      sum += element.totalPrice;
    });
  
    return sum;
  };
  
  // console.log(getShoppingTotalPrice());
  
  const getShoppingNotBoughtPrice = () => {
    let sum = 0;
  
    shoppingList.forEach((element) => {
      if (element.alreadyBought === false) sum += element.totalPrice;
    });
  
    return sum;
  };
  
  // console.log(getShoppingNotBoughtPrice());
  
  const showShoppingListSortedByPrice = (ascending = true) => {
    console.log(
      shoppingList.sort((a, b) => {
        if (a.price < b.price) return ascending ? -1 : 1;
        if (a.price > b.price) return ascending ? 1 : -1;
        return 0;
      })
    );
  };
  
  showShoppingListSortedByPrice(0);