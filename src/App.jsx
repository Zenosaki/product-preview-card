import cart from './assets/images/icon-cart.svg'
import './Main.scss'

export default function App() {
  return (
    <main>
      <div className="card-container">
        <div className="product-img"></div>
        <div className="product-description">
          <h4>PERFUME</h4>
          <h1 className='Card-title'>Gabrielle  Essence Eau  De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="price">
            <h1>$149.99</h1>
            <h5>$169.99</h5>
          </div>
          <button>
            <img src={cart} alt="cart-img" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}



