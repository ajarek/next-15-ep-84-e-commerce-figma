import mongoose from 'mongoose'

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, '_id'>

export type Crypto = {
  _id: string
  name: string
  symbol: string
  icon: string
  price: string
  currentRate: string
  quantity: string
  user: string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)
const cryptoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    icon: { type: String },
    price: { type: String, required: true },
    currentRate: { type: String, required: true },
    quantity: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Crypto =
  mongoose.models?.Crypto || mongoose.model('Crypto', cryptoSchema)
