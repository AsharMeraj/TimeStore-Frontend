import Button from './Button/Button';
import Link from 'next/link';
import { fetchData } from '../utils/api';
import { Main } from '../ProductPage/ProductList/ProductType';
import RelatedAllProd from './RelatedAllProd';


const SliderMenu = async () => {
  const products: Main = await fetchData('/api/products?populate=*')
  return (
    <main className=' flex flex-col items-center'>
      <h2 className='min-[1700px]:text-[3.5rem] text-[2.8rem] font-bold max-[840px]:text-[2.5rem] max-[602px]:text-[2rem] text-center max-[340px]:text-[1.5rem]'>Popular Items</h2>
      <p className=' max-w-[40rem] text-center text-[1.2rem] text-black/70 mx-6 max-[561px]:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem, aperiam asperiores maiores doloribus repellat iusto</p>
      <main className='w-[70rem] max-[1180px]:w-[60rem] max-lg:w-[53rem] max-[920px]:w-[48rem] max-[775px]:max-w-full focus:outline-none mt-[4rem] max-[840px]:mt-[2rem]'>
        <RelatedAllProd allproducts={products.data}/>
      </main>
      <div className='mt-[4rem] max-[840px]:mt-[2rem]'>
        <Link href={'/AllProducts'}>
          <Button name='VIEW MORE PRODUCTS' />
        </Link>
      </div>
    </main>
  )
}


export default SliderMenu