import Song from '../types/songs';
import { useState, useRef, useEffect } from 'react';

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
    useEffect(() => {
        const audio = audioRef.current;
        function handleEnded() {
            setIsPlaying(false);
        }
        audio?.addEventListener('ended', handleEnded);
        return () => {
            audio?.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} />
            {isPlaying && currentSong !== null && (
                <a
                    href={currentSong.trackViewUrl}
                    title="View track on Apple Music"
                >
                    <div className="now-playing">
                        {`NOW PLAYING: "${currentSong.trackName}" by ${currentSong.artistName}`}
                    </div>
                </a>
            )}
            <ul className="results">
                {songs.map((song) => (
                    <li key={song.trackId}>
                        <div className="single-result">
                            <img
                                src={song.artworkUrl100}
                                alt={song.trackName}
                                onClick={() => handlePlay(song)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ResultList;
