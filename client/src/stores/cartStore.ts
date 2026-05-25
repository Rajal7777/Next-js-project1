import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist((set) => ({
        cart: [],
        hasHydrate: false,
        addToCart: (product) =>
            set((state) => {
                const exisitingIndex = state.cart.findIndex(
                    (p) =>
                        p.id === product.id &&
                        p.selectedSize === product.selectedSize &&
                        p.selectedColor === product.selectedColor,
                );
                //if item
                if (exisitingIndex !== -1) {
                    const updatedCart = [...state.cart];
                    updatedCart[exisitingIndex].quantity += product.quantity || 1;
                    return { cart: updatedCart };
                }

                return {
                    cart: [
                        ...state.cart,
                        {
                            ...product,
                            quantity: product.quantity || 1,
                            selectedSize: product.selectedSize,
                            selectedColor: product.selectedColor,
                        },
                    ],
                };
            }),

        removeFromCart: (product) =>
            set((state) => ({
                cart: state.cart.filter(
                    (P) =>
                        !(
                            P.id === product.id &&
                            P.selectedSize === product.selectedSize &&
                            P.selectedColor === product.selectedColor
                        ),
                ),
            })),

        clearCart: () => set({ cart: [] }),
    }),

        {
            name: 'cart',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hasHydrate = true;
                }
            }

        }
    ),
);
