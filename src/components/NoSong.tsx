function NoSong({ term }: { term: string }) {
    return (
        <>
            <p className="no-song-message">No song titled "{term}" exists!</p>
        </>
    );
}

export default NoSong;
