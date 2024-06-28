export interface Main {
    data: MainDatum[];
    meta: Meta;
}

export interface MainDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:        string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    products:    Products;
}

export interface Products {
    data: ProductsDatum[];
}

export interface ProductsDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:           string;
    price:          number;
    size:           SizeClass;
    original_price: number;
    slug:           string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
}

export interface SizeClass {
    data: SizeDatum[];
}

export interface SizeDatum {
    size:    SizeEnum;
    enabled: boolean;
}

export enum SizeEnum {
    The24Mm = "24 mm",
    The28Mm = "28 mm",
    The32Mm = "32 mm",
    The36Mm = "36 mm",
    The40Mm = "40 mm",
    The44Mm = "44 mm",
    The48Mm = "48 mm",
    The52Mm = "52 mm",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
