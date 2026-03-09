import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    if (count == 0) {
      alert("no se puede washo");
      return;
    }
    setCount(count - 1);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const number = parseInt(inputValue, 10);

    if (isNaN(number)) {
      alert("ingresa un numero washin");
      return;
    }

    if (!Number.isInteger(number)) {
      alert("ingresa un numero entero washin");
      return;
    }

    if (count + number < 0) {
      alert(
        `no se puede agregar ${number} por que el contador no puede quedar negativo`,
      );
      return;
    }

    setCount((c) => c + number);
    setInputValue("");
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Contador chido</h1>
      <h2>Cuenta: {count}</h2>
      <div>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
      <br />
      <span>Añadir cantidad:</span>
      <input
        id="customAdd"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="ej. 6, -7, 0"
      />
      <button onClick={handleAdd}>Añadir</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <span> UX could improve...</span>
    </div>
  );
}
export default Counter;
