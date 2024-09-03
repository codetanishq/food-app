export const getDiscountedPrice = (originalPrice, discountedPrice) =>{
    const discount = originalPrice-discountedPrice;
     const discountPercentge = (discount/originalPrice) * 100;
     return discountPercentge.toFixed(2);
}

export const parseDescription = (description) => {
    return description.map((block) => {
      if (block.type === "paragraph") {
        return block.children.map((child) => child.text).join(" ");
      }
      if (block.type === "list" && block.format === "unordered") {
        return block.children
          .map((listItem) => `- ${listItem.children.map((child) => child.text).join(" ")}`)
          .join("\n");
      }
      return "";
    }).join("\n\n");
  };
  