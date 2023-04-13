import Song from "../types/songs";

export async function searchSongs(term: string): Promise<Song[]> {
    const response = await fetch(
        `https://itunes.apple.com/search?term=${term}&media&entity=song`
    );
    const data = await response.json();
    const results = data.results.map((result: any) => ({
        artistName: result.artistName,
        trackName: result.trackName,
        artworkUrl100: result.artworkUrl100,
        trackId: result.trackId,
        previewUrl: result.previewUrl,
        trackViewUrl: result.trackViewUrl
    }));
    return results;
}
