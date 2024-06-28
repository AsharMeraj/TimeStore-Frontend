export interface Main {
    data: MainDatum[];
    meta: Meta;
  }
  
  export interface MainDatum {
    id:         number;
    attributes: PurpleAttributes;
  }
  
  export interface PurpleAttributes {
    name:           string;
    price:          number;
    size:           SizeClass;
    original_price: number;
    slug:           string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
    image:          Image;
    thumbnail:      Image;
    category:       Category;
  }
  
  export interface Category {
    data: Data;
  }
  
  export interface Data {
    id:         number;
    attributes: DataAttributes;
  }
  
  export interface DataAttributes {
    name:        Name;
    slug:        Slug;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
  }
  
  export enum Name {
    Multifunction = "Multifunction",
    Premium = "Premium",
  }
  
  export enum Slug {
    Multifunction = "multifunction",
    Premium = "premium",
  }
  
  export interface Image {
    data: ImageDatum[];
  }
  
  export interface ImageDatum {
    id:         number;
    attributes: FluffyAttributes;
  }
  
  export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
  }
  
  export enum EXT {
    PNG = ".png",
  }
  
  export interface Formats {
    small:     Small;
    thumbnail: Small;
  }
  
  export interface Small {
    ext:               EXT;
    url:               string;
    hash:              string;
    mime:              MIME;
    name:              string;
    path:              null;
    size:              number;
    width:             number;
    height:            number;
    sizeInBytes:       number;
    provider_metadata: ProviderMetadata;
  }
  
  export enum MIME {
    ImagePNG = "image/png",
  }
  
  export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
  }
  
  export enum ResourceType {
    Image = "image",
  }
  
  export enum Provider {
    Cloudinary = "cloudinary",
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


  





















  