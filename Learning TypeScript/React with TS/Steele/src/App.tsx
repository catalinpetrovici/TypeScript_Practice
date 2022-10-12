import { useState } from 'react';
import { v4 as getId } from 'uuid';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string) => {
    console.log('made to the app component');
    console.log(getId());
    setItems([
      ...items,
      { id: getId(), product, quantity: Math.floor(Math.random() * 10) },
    ]);
  };

  return (
    <div>
      {/* <Greeter person='Colt' /> */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
