
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: 'Fresh' | 'Flavored' | 'Smoked' | 'Snacks' | 'Ready-to-Cook';
  nutritionFacts?: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  benefits?: string[];
  ingredientsList?: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  prepTime: string;
  healthBenefits: string[];
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}
