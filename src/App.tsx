import React, { useState } from 'react';
import { search } from './search';

function Header() {
    return (
        <header>
            <h1>Is this song title taken?</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <h2>@HOLOFLASH</h2>
        </footer>
    );
}

interface MyFormProps {
    onResultUpdate: (result: string) => void;
}

function MyForm({ onResultUpdate }: MyFormProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(event.currentTarget.username.value).then((response) => {
            if (response !== undefined) {
                onResultUpdate(response);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="search" name="username" />
            </label>
            <input className="search-button" type="submit" />
        </form>
    );
}

function App() {
    const [result, setResult] = useState('');

    const handleResultUpdate = (newResult: string) => {
        setResult(newResult);
    };

    return (
        <div className="App">
            <Header />
            <MyForm onResultUpdate={handleResultUpdate} />
            {result && <div className="result">{result}</div>}
            <Footer />
        </div>
    );
}

export default App;
