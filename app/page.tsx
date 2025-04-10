import SelectCategory from '@/components/SelectCategory'
import Carousel from '../components/Carousel'
import { fetchProducts } from '@/lib/api'

const Home = async () => {
  const { products } = await fetchProducts(10)

  const carouselImages = products.map((product) => product.thumbnail)
  const names = products.map((product) => product.title)
  // const category = products.map((product) => product.category)
 

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start p-4'>
      <div className='w-full min-h-screen flex  items-start justify-center gap-8 '>
        <div className='w-[217px] h-[344]  flex justify-center  border-r border-input'>
          <SelectCategory query='lol'/>    
        </div>
        <Carousel
          images={carouselImages}
          names={names}
        />
      </div>
    </div>
  )
}

export default Home
