export const getDiscountedPrice = (originalPrice, discountedPrice) =>{
    const discount = originalPrice-discountedPrice;
     const discountPercentge = (discount/originalPrice) * 100;
     return discountPercentge.toFixed(2);
}