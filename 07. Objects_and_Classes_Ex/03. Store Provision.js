function main(stock, order) {
  let store = {};
  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let qty = +stock[i + 1];
    store[product] = qty;
  }
  let keys = Object.keys(store);
  for (let i = 0; i < order.length; i += 2) {
    let have = false;
    let product = order[i];
    let qty = +order[i + 1];
    for (let key of keys) {
      if (product === key) {
        store[key] += qty;
        have = true;
      }
    }
    if (have == false) {
      store[product] = qty;
    }
  }
  let entries = Object.entries(store);
  for (let ent of entries) {
    console.log(`${ent[0]} -> ${ent[1]}`);
  }
}

main(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
        );
