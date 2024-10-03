import { assets } from "../db/db";

export function getAssetUrl(asset) {
  return asset.find((asset) => asset.id === assets.url);
}
