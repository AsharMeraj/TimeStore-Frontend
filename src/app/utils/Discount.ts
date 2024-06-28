export default function GetDiscountedPrice(OriginalPrice: number, DiscountedPrice: number): string{
    const discount = OriginalPrice - DiscountedPrice
    const discountPercentage = (discount/OriginalPrice) * 100

    return discountPercentage.toFixed(2)

}