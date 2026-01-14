'use client';

import { ShoppingBag } from 'lucide-react';
import { useRentalCart } from '@/context/RentalCartContext';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
}

export default function AddToCartButton({ productId, productName }: AddToCartButtonProps) {
  const { addItem } = useRentalCart();

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: productName,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
    >
      <ShoppingBag className="w-5 h-5" />
      In Warenkorb hinzufügen
    </button>
  );
}
