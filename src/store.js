import { create } from "zustand";
import { assets, categories } from "./db/db";

export const useConfigratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  customization: {}, /* "hair: {}*/
  fetchCategories: () => {
    //백엔드에서 받아올 데이터
    const categoriesTemp = categories;
    const assetsTemp = assets;
    const customizationTemp = {};
    categoriesTemp.forEach((category) => {
      category.assets = assetsTemp.filter(
        (asset) => asset.group === category.name
      );
      customizationTemp[category.name] = {}; 
    });
    set({
      categories: categoriesTemp,
      currentCategory: categoriesTemp[0],
      assets: assetsTemp,
      customization: customizationTemp,
    });
  },
  setCurrentCategory: (category) => set({ currentCategory: category }),
  changeAsset: (category, asset) =>
    set((state) => ({
      customization: {
        ...state.customization,
        [category]: {
          ...state.customization[category],
          asset,
        },
      },
    })),
}));
