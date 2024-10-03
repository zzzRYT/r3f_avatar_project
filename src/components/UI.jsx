import { useEffect } from "react";
import { useConfigratorStore } from "../store";

const AssetsBox = () => {
  const {
    categories,
    currentCategory,
    fetchCategories,
    setCurrentCategory,
    assets,
    changeAsset,
    customization,
  } = useConfigratorStore();

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="bg-white gap-6 drop-shadow-md flex flex-col">
      <div className="flex items-center gap-6 pointer-events-auto">
        {categories.map((category) => (
          <button
            onClick={() => setCurrentCategory(category)}
            key={category.id}
            className={`transition-colors duration-200 font-medium ${
              currentCategory.name === category.name
                ? "text-indigo-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {assets
          .filter((asset) => asset.group === currentCategory.name)
          .map((asset) => {
            return (
              <button
                key={asset.id}
                onClick={() => changeAsset(currentCategory.name, asset)}
                className={`w-20 h-20 border-2 pointer-events-auto rounded-md overflow-hidden bg-gray-200 hover:opacity-100 transition-all duration-500 ${
                  customization[currentCategory.name]?.asset?.id === asset.id
                    ? "border-indigo-500 opacity-100"
                    : "opacity-80 border-transparent"
                }`}
              >
                <img src={asset.thumbnail} alt="이미지" />
              </button>
            );
          })}
      </div>
    </div>
  );
};

const DownLoadButton = () => {
  return (
    <button className="rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colos duration-300 text-white font-medium px-4 py-3 pointer-events-none">
      DownLoad
    </button>
  );
};

export const UI = () => {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto max-w-screen-xl w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <a className="pointer-events-auto">
            <img className="w-20" src="" alt="로고" />
          </a>
          <DownLoadButton />
        </div>
      </div>
      <div className="flex flex-col">
        <AssetsBox />
      </div>
    </main>
  );
};
