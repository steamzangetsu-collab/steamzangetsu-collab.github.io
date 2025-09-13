const video = document.getElementById("video");

async function setVideoFromUrl(url, videoEl) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        const objUrl = URL.createObjectURL(blob);
        videoEl.src = objUrl;
        // когда не нужен, можно освободить:
        // URL.revokeObjectURL(objUrl);
        return objUrl;
    } catch (e) {
        console.error('Ошибка:', e.message);
  }
}

setVideoFromUrl('https://r.mradx.net/vrs/2f/86/b96fa0d3f78507139b5d.mp4', video);


