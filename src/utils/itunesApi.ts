import Song from "../types/songs";

export async function searchSongs(term: string): Promise<Song[]> {
    const response = await fetch(
        `https://itunes.apple.com/search?term=${term}&media&entity=song`
    );
    const data = await response.json();
    const results = data.results.map((result: any) => ({
        artistName: result.artistName,
        trackName: result.trackName,
        collectionName: result.collectionName,
        artworkUrl100: result.artworkUrl100,
        trackId: result.trackId,
    }));
    return results;
}
