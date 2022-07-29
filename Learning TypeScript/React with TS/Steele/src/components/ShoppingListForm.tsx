import React, { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const AddItem = (product: string) => {};

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' placeholder='Product Name' />
      <button type='submit'>Submit</button>
    </form>
  );
}
