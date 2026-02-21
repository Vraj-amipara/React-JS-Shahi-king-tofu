
import React, { useState } from 'react';
import { Clock, Heart, ChefHat, Sparkles, Loader2 } from 'lucide-react';
import { RECIPES } from '../constants';
import { getAIRecipeSuggestion } from '../services/geminiService';

const Recipes: React.FC = () => {
  const [aiRecipe, setAiRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateAI = async () => {
    setLoading(true);
    const result = await getAIRecipeSuggestion(['Royal Tofu', 'Saffron', 'Garlic', 'Chili']);
    if (result) setAiRecipe(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-emerald-900 mb-4">Shahi Culinary Art</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Traditional flavors meet modern health. Elevate your cooking with our royal tofu recipes.
          </p>
        </header>

        {/* Featured Recipes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    <Clock className="w-3 h-3 mr-1" /> {recipe.prepTime}
                  </span>
                  <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    <Heart className="w-3 h-3 mr-1" /> Healthy
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">{recipe.title}</h3>
                <p className="text-stone-500 text-sm mb-6">{recipe.description}</p>
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider">Key Ingredients</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                    {recipe.ingredients.slice(0, 4).map((ing, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800 transition-colors">
                  View Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recipe Generator Section */}
        <div className="royal-gradient rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
                <span className="text-sm font-bold tracking-widest uppercase">Powered by Gemini AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Shahi AI Chef Assistant</h2>
              <p className="text-stone-300 text-lg mb-10">
                Unlock royal recipes instantly. Our AI chef creates custom Indian-fusion tofu dishes based on what you have in your kitchen.
              </p>
              <button 
                onClick={handleGenerateAI}
                disabled={loading}
                className="px-10 py-5 bg-amber-500 hover:bg-amber-600 disabled:bg-stone-500 text-emerald-950 font-bold rounded-2xl flex items-center transition-all shadow-xl shadow-amber-900/20"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : <ChefHat className="w-6 h-6 mr-3" />}
                Generate Royal Recipe
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[400px]">
              {aiRecipe ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h3 className="text-3xl font-serif font-bold text-amber-400 mb-4">{aiRecipe.title}</h3>
                  <p className="text-stone-300 mb-6 italic">"{aiRecipe.description}"</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest opacity-60">Ingredients</h4>
                      <ul className="space-y-2 text-sm text-stone-300">
                        {aiRecipe.ingredients.map((ing: string, i: number) => (
                          <li key={i}>• {ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-widest opacity-60">Quick Info</h4>
                      <p className="text-sm text-stone-300 flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> {aiRecipe.prepTime}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ChefHat className="w-20 h-20 text-stone-300" />
                  <p className="text-stone-300">Click the button to summon <br/>the Shahi AI Chef.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;