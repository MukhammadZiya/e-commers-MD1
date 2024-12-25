// import {
//   ProductCollection,
//   ProductSize,
//   ProductVolume,
// } from "../libs/enums/product.enum";
// import mongoose, { Schema } from "mongoose";
// import { ProductStatus } from "../libs/enums/product.enum";

// const productSchema = new Schema(
//   {
//     productStatus: {
//       type: String,
//       enum: ProductStatus,
//       default: ProductStatus.PAUSE,
//     },
//     productCollection: {
//       type: String,
//       enum: ProductCollection,
//       required: true,
//     },
//     productName: {
//       type: String,
//       required: true,
//     },
//     productPrice: {
//       type: Number,
//       required: true,
//     },
//     productLeftCount: {
//       type: Number,
//       required: true,
//     },
//     productSize: {
//       type: String,
//       enum: ProductSize,
//       default: ProductSize.NORMAL,
//     },
//     productVolume: {
//       type: String,
//       enum: ProductVolume,
//       default: ProductVolume.LITER,
//     },
//     productDesc: {
//       type: String,
//       required: true,
//     },
//     productImages: {
//       type: [String],
//       default: [],
//     },
//     productViews: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true } //updated at va created at uchun
// );

// productSchema.index(
//   { productName: 1, ProductSize: 1, productVolume: 1 },
//   { unique: true }
// );

// export default mongoose.model("Member", productSchema);