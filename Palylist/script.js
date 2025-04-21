const playlistEl = document.querySelector("#playlist");
const videoPlayer = document.querySelector("#videoPlayer");
const addBtn = document.querySelector("#addBtn");
const titleInput = document.querySelector("#videoTitle");
const idInput = document.querySelector("#videoId");

let playlist = [];
addFromLocalStorage();
desplay();

addBtn.addEventListener('click', () => {
    let songTitle = titleInput.value.trim();
    let videoId = idInput.value.trim();

    if (songTitle === "" || videoId === "") {
        alert("Please, fill out all fields!")
        return
    }

    playlist.push({ songTitle, videoId })
    titleInput.value = ""
    idInput.value = ""
    desplay()
    savePlaylistLocalStorage(songTitle, videoId)

})

function savePlaylistLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function addFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        let videoObject = {
            songTitle: key,
            videoId: value
        }
        playlist.push(videoObject)
        console.log(`${key}: ${value}`)
        console.log(playlist)
    }
}


function desplay() {
    playlistEl.innerHTML = ""
    playlist.forEach((item, index) => {
        let li = document.createElement("li")
        li.innerHTML = item.songTitle
        let btn = document.createElement("button")
        btn.classList.add("remove-btn")
        btn.innerHTML = "X"
        li.appendChild(btn)
        playlistEl.appendChild(li)
        li.addEventListener('click', () => {
            videoPlayer.src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1`
        })
        btn.addEventListener('click', () => {
            playlist.splice(index, 1)
            console.log(playlist)
            localStorage.removeItem(item.songTitle)
            videoPlayer.src = "";
            setTimeout(() => {
                videoPlayer.removeAttribute("src");
            }, 0);
            desplay();
            
        })
    })
}