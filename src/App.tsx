import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import ProductSection from './components/ProductSection/ProductSection'
import PartnersBanner from './components/PartnersBanner/PartnersBanner'
import BrandsSection from './components/BrandsSection/BrandsSection'
import Newsletter from './components/Newsletter/Newsletter'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <ProductSection />
        <PartnersBanner />
        <ProductSection showTabs={false} showViewAll />
        <BrandsSection />
        <ProductSection showTabs={false} showViewAll />
        <Newsletter />  
      </main>
    </>
  )
}

export default App