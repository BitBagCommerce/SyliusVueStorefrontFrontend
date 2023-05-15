import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@vue-storefront/sylius-api/src/types';

// TODO: add better typing after category list changes
const itemToTree = (category: Category): AgnosticCategoryTree => {
  return {
    label: category.name,
    slug: category.slug,
    items: category.items.map(itemToTree),
    isCurrent: false
  };
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: Category): AgnosticCategoryTree => {
  if (category) {
    return itemToTree(category);
  }
  return {} as AgnosticCategoryTree;
};

export const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree
};

