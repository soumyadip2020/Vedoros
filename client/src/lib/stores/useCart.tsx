import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Relic } from '../../data/relics';

export interface CartItem {
  relic: Relic;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (relic: Relic, quantity?: number) => void;
  removeItem: (relicId: string) => void;
  updateQuantity: (relicId: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  
  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (relic: Relic, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.relic.id === relic.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.relic.id === relic.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          } else {
            return {
              items: [...state.items, { relic, quantity }]
            };
          }
        });
      },

      removeItem: (relicId: string) => {
        set((state) => ({
          items: state.items.filter(item => item.relic.id !== relicId)
        }));
      },

      updateQuantity: (relicId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(relicId);
          return;
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.relic.id === relicId
              ? { ...item, quantity }
              : item
          )
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      setIsOpen: (isOpen: boolean) => {
        set({ isOpen });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.relic.price * item.quantity), 0);
      }
    }),
    {
      name: 'vedoros-cart',
      version: 1
    }
  )
);