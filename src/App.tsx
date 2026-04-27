import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import ProductSection from './components/ProductSection/ProductSection'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <ProductSection />
      </main>
    </>
  )
}

export default App