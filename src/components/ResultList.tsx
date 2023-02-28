import Song from '../types/songs';
import { useState, useRef } from 'react';

interface ResultListProps {
    songs: Song[];
}

function ResultList({ songs }: ResultListProps) {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    function handlePlay(song: Song) {
        const audio = audioRef.current;
        if (song === currentSong && isPlaying) {
            setIsPlaying(false);
            audio?.pause();
        } else {
            setCurrentSong(song);
            setIsPlaying(true);
            audio?.pause();
            audio?.setAttribute('src', song.previewUrl);
            audio?.play();
        }
    }

    return (
        <>
            <audio ref={audioRef} />
            <ul className="results">
                {songs.map((song) => (
                    <li key={song.trackId}>
                        <div className="single-result">
                            <p className="title">"{song.trackName}"</p>
                            <img
                                src={song.artworkUrl100}
                                alt={song.trackName}
                                onClick={() => handlePlay(song)}
                            />
                            <p className="artist">{song.artistName}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ResultList;
