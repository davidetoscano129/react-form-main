import { useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]); // stato per gli articoli
  const [title, setTitle] = useState(''); // stato per il titolo

  // funzione per aggiungere un nuovo articolo
  const addArticle = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      setArticles([...articles, { title }]);
      setTitle('');
    }
  };

  // funzione per "cancellare" un articolo usando map
  const deleteArticle = (indexToDelete) => {
    const updatedArticles = articles.map((article, index) =>
      index === indexToDelete ? null : article
    );
    setArticles(updatedArticles);
  };

  return (
    <div className="App">
      <h1>React Blog Form</h1>
      {/* Form per aggiungere un articolo */}
      <form onSubmit={addArticle}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci il titolo dell'articolo"
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>

      {/* Lista degli articoli */}
      <ul>
        {articles.map((article, index) =>
          article ? ( // Se l'articolo non è null, lo visualizziamo
            <li key={index}>
              {article.title}
              <button onClick={() => deleteArticle(index)}>🗑️</button>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default App;