import React from 'react';
import Song from '../types/songs';
import { searchSongs } from '../services/itunesApi';
import Form from './Form';

interface MyFormProps {
    onResultUpdate: (result: Song[], term: string) => void;
}

function MyForm({ onResultUpdate }: MyFormProps) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const term = event.currentTarget.username.value;
        try {
            const results = await searchSongs(term);
            const filteredResults: Song[] = [];
            const uniqueSongs = new Set<string>();
            for (const song of results) {
                const key =
                    song.trackName.toLowerCase() +
                    song.artistName.toLowerCase();
                if (!uniqueSongs.has(key)) {
                    uniqueSongs.add(key);
                    filteredResults.push(song);
                }
            }
            onResultUpdate(filteredResults, term);
        } catch (error) {
            console.error(error);
        }
    };

    return <Form onSubmit={handleSubmit} />;
}

export default MyForm;
