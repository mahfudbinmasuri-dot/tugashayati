function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6e24ktxZOAn":
        Script1();
        break;
      case "5gekl2WE8PX":
        Script2();
        break;
  }
}

function Script1()
{
  // Cek apakah audio global sudah ada
if (!window.bgAudio) {
    // Kalau BELUM ada, baru buat
    var audio = document.getElementById('bgSong');
    audio.src = "1.mp3";
    audio.loop = true;
    audio.volume = 0.6;

    audio.play();
    console.log("Audio pertama kali diputar.");

    // Simpan ke global
    window.bgAudio = audio;
} else {
    // Kalau SUDAH ada, jangan play lagi
    console.log("Audio sudah ada & sudah diputar, tidak play ulang.");
}

}

function Script2()
{
  if (window.bgAudio) {
    window.bgAudio.pause();
    console.log("Audio di-pause.");
}
}

