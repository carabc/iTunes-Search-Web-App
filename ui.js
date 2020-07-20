// UI Class to paint the UI
class UI {
  constructor() {
    this.ui = document.querySelector(".results__box");
    this.artistHeader = document.getElementById("artist-name");
  }

  paintUI(albums) {
    // Set inner text of artist name header
    const artistName = (this.artistHeader.textContent = albums[0].artistName);

    let output = ``;
    albums.forEach((album) => {
      output += `
      <div class="box">
            <img id="album-art" width="250px" height="250px" src="${album.artworkUrl100}" alt="" />
            <div class="albm-detail">
              <h1 id="album-name">${album.collectionName}</h1>
              <ul class="info">
                <li class="list-item" id="album-price">
                  Album Price: <span class="badge" id="price">${album.collectionPrice}</span>
                </li>
                <li class="list-item" id="track-count">Track Count: ${album.trackCount}</li>
                <li class="list-item" id="record-label">Record Label: ${album.copyright}</li>
                <li class="list-item" id="release-date">Release Date: ${album.releaseDate}</li>
                <li class="list-item" id="genre">Genre: ${album.primaryGenreName}</li>
              </ul>
            </div>
          </div>
    `;
    });
    this.ui.innerHTML = output;
  }

  clearUI() {
    this.ui.innerHTML = "";
    this.artistHeader.textContent = "";
  }
}
