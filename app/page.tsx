import Carousel from '../components/Carousel'
import { fetchProducts } from '@/lib/api';

const Home = async () => {
  const { products } = await fetchProducts(20);
  
  const carouselImages = products.map((product) => product.thumbnail);
  const names = products.map(product => product.title);
  
  return (
  <div className='min-h-screen flex flex-col items-center justify-center'>
    <h1 className="text-2xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Home</h1>
 <div className='relative w-[892] h-[344px]'>
    
    <Carousel images={carouselImages} names={names} />

 </div>
  </div>
  )
}

export default Home
