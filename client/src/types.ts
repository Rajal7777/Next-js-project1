import { z } from 'zod';
 
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsType = CartItemType[];


export const shippingFormSchema = z.object({
    name: z.string().min(3, 'Name is required!'),
    email: z.string().min(5,'Email is required!'),
    phone: z
    .string()
    .min(8, 'Phone number met be between 7 to 10 digits!')
    .max(11,'Phone number must be between 7 and 10 digits!')
    .regex(/^\d+$/, 'Phone number must contain only numbers!'),
    address: z.string().min(5, 'City is Required!'),
    city: z.string().min(5, 'City is required!')
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;