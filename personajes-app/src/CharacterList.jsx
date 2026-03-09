import { useState, useEffect } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      const data = await response.json();
      setCharacters(data.results);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error al obtener personajes: ", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="character-list">
      <h1>Personajes de Rick and Morty</h1>

      <div className="characters-grid">
        {console.log("Characters:", characters)}
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>
              <strong>Estado:</strong> {character.status}
            </p>
            <p>
              <strong>Especie:</strong> {character.species}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
