function NoSong({ term }: { term: string }) {
    return (
        term && (
            <p className="no-song-message">No song titled "{term}" exists!</p>
        )
    );
}

export default NoSong;
