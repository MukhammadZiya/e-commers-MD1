export enum ProductSize {
  SINGLE = "SINGLE", // For single items like one chair, one table, etc.
  FULL_SET = "FULL_SET", // For complete furniture sets (e.g., dining table + chairs)
}

export enum ProductDimension {
  SMALL = "SMALL", // Small-sized furniture (e.g., coffee table, bedside table)
  STANDARD = "STANDARD", // Medium-sized furniture (e.g., 4-seater dining table, compact wardrobe)
  LARGE = "LARGE", // Large furniture (e.g., 6-seater dining table, large wardrobe)
  EXTRA_LARGE = "EXTRA_LARGE", // Extra-large items (e.g., conference table, king-size bed)
}

export enum ProductStatus {
  PAUSE = "PAUSE",
  PROCESS = "PROCESS",
  DELETE = "DELETE",
}

export enum ProductCollection {
  CHAIRS = "CHAIRS", // Includes various types of chairs
  TABLES = "TABLES", // Includes dining tables, coffee tables, etc.
  STORAGE = "STORAGE", // Includes wardrobes, shelves, cabinets, etc.
  BEDS = "BEDS", // Includes beds, mattresses, and bed frames
  OTHER = "OTHER", // Miscellaneous items or uncategorized furniture
}
