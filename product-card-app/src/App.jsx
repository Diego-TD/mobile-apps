import ProductCard from "./ProductCard";
import "./index.css";
function App() {
  return (
    <div className="app-container">
      <h1 className="app-title"> Catálogo de Productos</h1>
      <div className="products-grid">
        <ProductCard title="Laptop Gamer" price={1299.99} />
        <ProductCard title="Mouse Inalámbrico" price={29.99} />
        <ProductCard title="Teclado Mecánico" price={89.5} />
        <ProductCard title="Monitor 4K" price={449.0} />
      </div>
    </div>
  );
}
export default App;
