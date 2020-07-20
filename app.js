// Instantiate iTunes Class
const itunes = new iTunes();
// Instantiate UI Class
const ui = new UI();

const searchBox = document.querySelector(".text-box");

searchBox.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  // Check to see if the input is valid and not empty
  if (userText !== "") {
    // URL Encode userText
    const encodedTextURL = encodeURIComponent(userText);
    // Get Artist Album Data From iTunes Database
    itunes.getArtistData(encodedTextURL).then((artistData) => {
      // Paint the UI with artist album info
      ui.paintUI(artistData);
    });
  } else {
    // If there is nothing in the search bar, clear the ui
    ui.clearUI();
  }
});
