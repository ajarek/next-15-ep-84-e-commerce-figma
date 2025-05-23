import { fetchProducts } from '@/lib/api'
import type { Product } from '@/lib/api'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import ButtonAddCart from '@/components/ButtonAddCart'
import LinksCategory from '@/components/LinksCategory'
import dynamic from 'next/dynamic'
const SkeletonImage = dynamic(() => import('@/components/SkeletonImage'))

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>
}) => {
  const { products } = await fetchProducts(48)
  const { name } = (await searchParams) || {}
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start px-4 py-4 gap-4'>
      <h1 className='text-2xl font-semibold'>Select Categories</h1>
      <LinksCategory />
      <h1 className='text-2xl font-semibold'>
        {name ? 'Products name: ' + name : 'All Products'}
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {products
          .filter(
            (item) =>
              item?.title.toUpperCase().includes(name?.toUpperCase()) || !name
          )
          .map((product: Product) => (
            <Card key={product.id}>
              <CardContent className='relative flex flex-col aspect-square  p-2 cursor-grab'>
                <div className='absolute top-1 left-2 bg-red-500 text-white px-4 py-1 rounded-sm'>
                  -{product.discountPercentage}%
                </div>
                <div className='absolute top-1 right-2 flex flex-col gap-4   px-2 py-1 rounded-sm z-10'>
                  <Link
                    href='/'
                    className='text-2xl '
                  >
                    ❤
                  </Link>
                  <Link
                    href={`/productId?id=${product.id}`}
                    className='text-2xl '
                  >
                    👁
                  </Link>
                  <ButtonAddCart
                    quantity={1}
                    product={product}
                    label='&#128092;'
                    className='cursor-pointer className=" text-2xl'
                  />
                </div>
                <SkeletonImage
                  src={product.thumbnail || ''}
                  alt={product.title || ''}
                  width={200}
                  height={200}
                />
                <h1>{product.title}</h1>
                <div className='flex items center gap-4'>
                  <p className='text-red-500 font-semibold '>
                    ${product.price.toFixed(2)}
                  </p>
                  <p className='line-through text-gray-700'>
                    $
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </div>
                <p>⭐⭐⭐⭐⭐ (88)</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}
export default Products
