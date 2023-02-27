export const search = async (term: string) => {
    try {
        const res = await fetch(
            `https://itunes.apple.com/search?term=${term}&entity=song`
        );
        const data = await res.json();
        if (data.resultCount > 0) {
            return `Yes, there are at least ${data.resultCount} songs titled "${term}".`;
        } else {
            return `No, there are no songs titled ${term}`;
        }
    } catch (error: any) {
        console.log(error.name);
    }
};
