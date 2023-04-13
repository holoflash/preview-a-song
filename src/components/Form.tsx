import React from 'react';

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ onSubmit }: FormProps) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                <input
                    className="search-bar"
                    type="text"
                    name="username"
                    placeholder="Enter a song title"
                    autoComplete="off"
                />
            </label>
            <input className="search-button" type="submit" value="SEARCH" />
        </form>
    );
}

export default Form;
