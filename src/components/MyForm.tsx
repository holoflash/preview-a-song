import React from 'react';
import Song from '../types/songs';
import { searchSongs } from '../utils/itunesApi';
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
            const uniqueArtists = new Set<string>();
            const uniqueResults: Song[] = [];
            for (const song of results) {
                if (!uniqueArtists.has(song.artistName.toLowerCase())) {
                    uniqueArtists.add(song.artistName.toLowerCase());
                    uniqueResults.push(song);
                }
            }

            onResultUpdate(
                uniqueResults.filter(
                    (song: Song) =>
                        song.trackName.toLowerCase() === term.toLowerCase()
                ),
                term
            );
        } catch (error) {
            console.error(error);
        }
    };

    return <Form onSubmit={handleSubmit} />;
}

export default MyForm;
