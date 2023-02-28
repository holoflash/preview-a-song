import Song from '../types/songs';
import styles from '../styles/ResultList.module.scss';

interface ResultListProps {
    songs: Song[];
}

function ResultList({ songs }: ResultListProps) {
    return (
        <ul className={styles.results}>
            {songs.map((song) => (
                <li key={song.trackId}>
                    <img src={song.artworkUrl100} alt={song.trackName} />
                    <div className="song-info">
                        <p>{song.trackName}</p>
                        <p>{song.artistName}</p>
                        <p>{song.collectionName}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ResultList;
