declare module "@salesforce/apex/CatProd.getProducts" {
  export default function getProducts(param: {searchText: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getProductsinAsce" {
  export default function getProductsinAsce(param: {searchText: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getProductsinDesc" {
  export default function getProductsinDesc(param: {searchText: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getCategorySelected" {
  export default function getCategorySelected(param: {categoryId: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getBrandSelected" {
  export default function getBrandSelected(param: {brandName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getMakerSelected" {
  export default function getMakerSelected(param: {makerName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getComb_cat_brandSelected" {
  export default function getComb_cat_brandSelected(param: {categoryId: any, brandName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getComb_cat_makerSelected" {
  export default function getComb_cat_makerSelected(param: {categoryId: any, makerName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getComb_brand_makerSelected" {
  export default function getComb_brand_makerSelected(param: {brandName: any, makerName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getComb_cat_maker_brandSelected" {
  export default function getComb_cat_maker_brandSelected(param: {categoryId: any, brandName: any, makerName: any}): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getCategories" {
  export default function getCategories(): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getBrands" {
  export default function getBrands(): Promise<any>;
}
declare module "@salesforce/apex/CatProd.getMakers" {
  export default function getMakers(): Promise<any>;
}
declare module "@salesforce/apex/CatProd.createOrder" {
  export default function createOrder(param: {status: any, amount: any, prodId: any, quant: any}): Promise<any>;
}
