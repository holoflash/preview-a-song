import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MyForm from './components/MyForm';
import ResultList from './components/ResultList';
import Song from './types/songs';
import NoSong from './components/NoSong';

function App() {
    const [result, setResult] = useState<Song[]>([]);
    const [term, setTerm] = useState('');
    const handleResultUpdate = (newResult: Song[], term: string) => {
        setResult(newResult);
        setTerm(term);
    };

    return (
        <div className="App">
            <Header />
            {result.length === 0 && <NoSong term={term} />}
            <MyForm onResultUpdate={handleResultUpdate} />

            {result.length > 0 && <ResultList songs={result} />}
            <Footer />
        </div>
    );
}

export default App;
