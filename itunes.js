class iTunes {
  async getArtistData(searchTerm) {
    const itunesRes = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&entity=album`
    );
    const artistData = await itunesRes.json();
    return artistData.results;
  }
}
