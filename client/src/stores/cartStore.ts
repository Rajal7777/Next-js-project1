import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//persist -> saves data permanently to localStorage / sessionStorage
//createJSONStorage -> tells zustand to use localstorage
//& means coombine both CartStoreStateType CartStoreActionsType so the store contains both state and actions/fun
const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [], //initial cart is empty
      hasHydrated: false, //checks whether localstorage data has loaded yet {load saved data from localStorage into Zustand}
      addToCart: (product) =>
        set((state) => {
          //set() -> update zustand state
          const exisitingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor,
          );
          //if item
          if (exisitingIndex !== -1) {
            const updatedCart = [...state.cart]; //creates a copy
            updatedCart[exisitingIndex].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }

          //no item add new product into cart
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
      name: "cart",  //this is the localstorage key
      storage: createJSONStorage(() => localStorage), //tells zustand use browser localstorage and automatically convert object to JSON
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);

export default useCartStore;
