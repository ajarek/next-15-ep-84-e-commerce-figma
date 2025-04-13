import SelectCategory from '@/components/SelectCategory'
import Carousel from '../components/Carousel'
import { fetchProducts } from '@/lib/api'
import CarouselFull from '@/components/CarouselFull'
import Timer from '@/components/Timer';
import PatternDiv from '@/components/PatternDiv';
import LinksCategory from '@/components/LinksCategory';
const saleEndDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
const Home = async () => {
  const { products } = await fetchProducts(10)

  const carouselImages = products.map((product) => product.thumbnail)
  const names = products.map((product) => product.title)
  // const category = products.map((product) => product.category)
 

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start px-4 py-8 gap-8'>
      <div className='w-full  flex  items-start justify-center gap-8 '>
        <div className='w-[217px] h-[344]  flex justify-center  border-r border-input'>
          <SelectCategory query='lol'/>    
        </div>
        <Carousel
          images={carouselImages}
          names={names}
        />
      </div>
      <div className='w-full flex flex-col gap-4 mt-8 pl-8'>
       <PatternDiv label='Today&apos;s'/>
      <Timer endDate={saleEndDate} title="Flash Sale Ends In:" />
      <CarouselFull products={products}/>

      </div>
      <div className='w-full flex flex-col gap-4 mt-8 pl-8 '>
       <PatternDiv label='Categories'/>
       <h3 className='text-2xl font-semibold  mt-4'>Browse By Category</h3>
       <LinksCategory/>
      </div>
    </div>
  )
}

export default Home
