
import { Product, Recipe } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Royal Fresh Tofu Block',
    description: 'Ultra-creamy, high-protein fresh tofu made from organic non-GMO soybeans. The perfect foundation for any shahi dish.',
    price: 180,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    category: 'Fresh',
    nutritionFacts: { calories: '80 kcal', protein: '12g', fat: '4g', carbs: '2g' },
    benefits: ['Muscle Recovery', 'Heart Health', 'Purely Vegan'],
    ingredientsList: ['Organic Soybeans', 'Filtered Water', 'Natural Nigari']
  },
  {
    id: 'p2',
    name: 'Shahi Tikka Tofu',
    description: 'Pre-marinated in traditional Indian spices and hung curd for a rich tikka flavor. Ready for the grill or tandoor.',
    price: 240,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800',
    category: 'Flavored',
    nutritionFacts: { calories: '110 kcal', protein: '14g', fat: '6g', carbs: '3g' },
    benefits: ['Spicy & Savory', 'Probiotic Marination', 'Quick Meal'],
    ingredientsList: ['Tofu', 'Greek Yogurt', 'Ginger', 'Garlic', 'Tandoori Masala']
  },
  {
    id: 'p3',
    name: 'Hickory Smoked Tofu',
    description: 'Slow-smoked with natural wood for a deep, earthy aroma. Perfect for sandwiches and gourmet salads.',
    price: 210,
    weight: '250g',
    image: 'https://profusioncurry.com/wp-content/uploads/2022/05/Smoky-tofu-on-white-dinner-plate-with-chopsticks.jpg',
    category: 'Smoked',
    nutritionFacts: { calories: '95 kcal', protein: '13g', fat: '5g', carbs: '2g' },
    benefits: ['Wood-Smoked Flavor', 'No Artificial Smoke', 'Ready-to-Eat'],
    ingredientsList: ['Tofu', 'Natural Liquid Smoke', 'Sea Salt', 'Organic Soy Sauce']
  },
  {
    id: 'p4',
    name: 'Tofu Bhurji Mix',
    description: 'Crumpled tofu with a blend of sautéed onions, tomatoes, and royal spices. A quick and healthy breakfast option.',
    price: 220,
    weight: '300g',
    image: 'https://images.archanaskitchen.com/images/recipes/indian/main-course/north-indian-vegetarian-recipes/sabzi-recipes/Tofu_Bhurji_Recipe_46a9ef733e.jpg',
    category: 'Ready-to-Cook',
    nutritionFacts: { calories: '120 kcal', protein: '10g', fat: '7g', carbs: '5g' },
    benefits: ['Breakfast Staple', 'High Fiber', 'Rich in Turmeric'],
    ingredientsList: ['Crumbled Tofu', 'Onions', 'Tomatoes', 'Green Chilies', 'Turmeric']
  },
  {
    id: 'p5',
    name: 'Peri-Peri Tofu Crisps',
    description: 'Dehydrated tofu slices seasoned with spicy peri-peri. The ultimate guilt-free vegan snack for spice lovers.',
    price: 150,
    weight: '100g',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwYy2b9_jFczyLmu1JI6BFOBGpRYyHFX1Fw&s',
    category: 'Snacks',
    nutritionFacts: { calories: '45 kcal', protein: '6g', fat: '1g', carbs: '3g' },
    benefits: ['Weight Management', 'Crunchy Texture', 'Zero Trans Fat'],
    ingredientsList: ['Soy Protein', 'Peri-Peri Spice', 'Garlic Powder', 'Paprika']
  },
  {
    id: 'p6',
    name: 'Saffron Garlic Tofu',
    description: 'Exquisite fusion of royal saffron threads and roasted garlic infusion. A truly unique and aromatic experience.',
    price: 260,
    weight: '250g',
    image: 'https://www.gimmesomeoven.com/wp-content/uploads/2018/08/The-Best-Crispy-Baked-Tofu-Recipe-5.jpg',
    category: 'Flavored',
    nutritionFacts: { calories: '105 kcal', protein: '12g', fat: '5g', carbs: '3g' },
    benefits: ['Antioxidant Rich', 'Royal Aroma', 'Immunity Boost'],
    ingredientsList: ['Tofu', 'Saffron Extract', 'Roasted Garlic', 'Olive Oil']
  },
  {
    id: 'p7',
    name: 'Zesty Sriracha Lime Tofu',
    description: 'A bold combination of spicy sriracha and tangy lime. Adds a vibrant kick to your stir-fries and wraps.',
    price: 230,
    weight: '250g',
    image: 'https://plantbasedonabudget.com/wp-content/uploads/2025/03/Sweet-Coconut-Thai-Tofu-11.jpg',
    category: 'Flavored',
    nutritionFacts: { calories: '100 kcal', protein: '13g', fat: '4g', carbs: '4g' },
    benefits: ['Vitamin C Rich', 'Metabolism Boost', 'Tangy Twist'],
    ingredientsList: ['Tofu', 'Sriracha Sauce', 'Fresh Lime Juice', 'Cilantro']
  },
  {
    id: 'p8',
    name: 'Tofu Tikka Masala Kit',
    description: 'A complete luxury meal kit including marinated tofu cubes and a rich, creamy tomato gravy base.',
    price: 320,
    weight: '450g',
    image: 'https://cookilicious.com/wp-content/uploads/2023/02/vegan-tofu-tikka-masala-28.jpg',
    category: 'Ready-to-Cook',
    nutritionFacts: { calories: '250 kcal', protein: '18g', fat: '12g', carbs: '15g' },
    benefits: ['Complete Meal', 'Restaurant Style', 'No Preservatives'],
    ingredientsList: ['Marinated Tofu', 'Tomato Puree', 'Cashews', 'Indian Spices']
  },
  {
    id: 'p9',
    name: 'Tofu & Plant Proteins',
    description: 'Our premium smoked tofu infused with real truffle oil for an earthy, luxurious finish. For the true connoisseur.',
    price: 350,
    weight: '200g',
    image: 'https://www.house-foods.com/assets/image-cache/uploads/vegan-protein-sources-2.a5b0f58f.jpg',
    category: 'Smoked',
    nutritionFacts: { calories: '130 kcal', protein: '15g', fat: '8g', carbs: '2g' },
    benefits: ['Gourmet Quality', 'Keto Friendly', 'Plant Powered'],
    ingredientsList: ['Tofu', 'Truffle Oil', 'Black Salt', 'Herbs']
  },
  {
    id: 'p10',
    name: 'Golden Tofu Nuggets',
    description: 'Crispy, breaded tofu nuggets seasoned with a secret blend of Desi spices. Served with a mint-yogurt dip.',
    price: 190,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800',
    category: 'Snacks',
    nutritionFacts: { calories: '180 kcal', protein: '10g', fat: '9g', carbs: '12g' },
    benefits: ['Kid-Friendly', 'High Protein', 'Crunchy Joy'],
    ingredientsList: ['Tofu', 'Whole Wheat Crumbs', 'Spices', 'Corn Starch']
  },
  {
    id: 'p11',
    name: 'Tofu Malai Seekh',
    description: 'Creamy, succulent tofu skewers blended with ground cashews and mild shahi spices. A melt-in-mouth appetizer.',
    price: 280,
    weight: '300g',
    image: 'https://holycowvegan.net/wp-content/uploads/2019/04/methi-malai-paneer-tofu-12.jpg',
    category: 'Ready-to-Cook',
    nutritionFacts: { calories: '210 kcal', protein: '14g', fat: '13g', carbs: '6g' },
    benefits: ['Melt-in-Mouth', 'Luxury Appetizer', 'Healthy Fats'],
    ingredientsList: ['Creamy Tofu', 'Cashew Paste', 'Cardamom', 'Cream']
  },
  {
    id: 'p12',
    name: 'Royal Herb Infused Tofu',
    description: 'A sophisticated blend of Mediterranean herbs like basil, oregano, and rosemary, infused into our signature tofu.',
    price: 225,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&q=80&w=800',
    category: 'Flavored',
    nutritionFacts: { calories: '90 kcal', protein: '12g', fat: '4g', carbs: '3g' },
    benefits: ['Aromatic Herbs', 'Clean Label', 'Versatile Use'],
    ingredientsList: ['Tofu', 'Fresh Basil', 'Dried Oregano', 'Extra Virgin Olive Oil']
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: 'Tofu Butter Masala',
    description: 'A decadent, creamy tomato-based gravy with soft tofu cubes, mimicking the classic Paneer Butter Masala.',
    ingredients: ['Royal Fresh Tofu', 'Tomato Puree', 'Cashew Paste', 'Shahi Garam Masala', 'Fresh Cream'],
    prepTime: '25 mins',
    healthBenefits: ['High Protein', 'Rich in Isoflavones', 'Lactose Free'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'r2',
    title: 'Healthy Tofu Quinoa Bowl',
    description: 'A nutritional powerhouse featuring grilled tofu, leafy greens, and a zesty lemon-tahini dressing.',
    ingredients: ['Smoked Tofu', 'Quinoa', 'Baby Spinach', 'Avocado', 'Pomegranate Seeds'],
    prepTime: '15 mins',
    healthBenefits: ['Weight Management', 'Heart Healthy', 'Fiber Rich'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  }
];
