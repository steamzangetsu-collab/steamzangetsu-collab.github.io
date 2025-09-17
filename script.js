let b = 0;

const startBannerVideo = document.getElementById("startBannerVideo");
const startBannerInfoName = document.getElementById("startBannerInfoName");
const startBannerButtonVolume = document.getElementById("startBannerButtonVolume");
const startBannerInfoGenreOne = document.getElementById("startBannerInfoGenreOne");
const startBannerInfoGenreTwo = document.getElementById("startBannerInfoGenreTwo");
const startBannerInfoGenreThree = document.getElementById("startBannerInfoGenreThree");
const startBannerInfoGenreFour = document.getElementById("startBannerInfoGenreFour");
const startBannerInfoSlash = document.getElementById("startBannerInfoSlash");
const startBannerInfoPoint = document.getElementById("startBannerInfoPoint");
const startBannerInfoCaption = document.getElementById("startBannerInfoCaption");

function getRandomOpening(obj) {
  const keys = Object.keys(obj);              
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { id: randomKey, data: obj[randomKey] };
}

const openings = {
    "22319": {
        title: "Токийский гуль",
        genres: ["Сэйнэн", "Экшен", "Фэнтези", "Ужасы", "Триллер"],
        point: "7,79",
        caption: "В Токио происходит серия жестоких убийств. На местах преступлений практически нет улик, однако все уверены, что виновниками являются гули, пожирающие людей, хотя никто толком не знает, кто они и как выглядят. Эти события мало волнуют Кэна Канэки, но вместе со своим лучшим другом Хидэёши Нагачикой он считает, что гулей до сих пор не обнаружили только потому, что они ловко маскируются под своих жертв...",
        tag: "22319"
    },

    "59654": {
        title: "Магическая битва: Пагубный талант",
        genres: ["Сёнен", "Экшен", "Сверхъестественное"],
        point: "8,07",
        caption: "Нет описания",
        tag: "59654"
    },

    "52991": {
        title: "Провожающая в последний путь Фрирен",
        genres: ["Сёнен", "Приключения", "Драма", "Фэнтези"],
        point: "9,3",
        caption: "Одержав победу над Королём демонов, отряд героя Химмеля вернулся домой. Приключение, растянувшееся на десятилетие, подошло к завершению. Волшебница-эльф Фрирен и её отважные товарищи принесли людям мир и разошлись в разные стороны, чтобы спокойно прожить остаток жизни. Однако не всех членов отряда ждёт одинаковая участь. Для эльфов время течёт иначе, поэтому Фрирен вынужденно становится свидетелем того, как её спутники один за другим постепенно уходят из жизни.",
        tag: "52991"
    },

    "00033": {
        title: "Берсерк",
        genres: ["Сэйнэн", "Экшен", "Приключения", "Ужасы"], 
        point: "8,6",
        caption: "Отважный молодой воин Гатс испытывает судьбу в качестве наёмника на передовой. Роковая встреча сводит Гатса с харизматичным и беспощадным юношей по имени Гриффит. Возглавляя непобедимый отряд, известный как «Банда Ястреба», Гриффит владеет грозной силой, несравнимой ни с чем. Движимые стремлением к статусу, «ястребы» проявляют невиданную доселе доблесть в военных делах и выдержку в делах политических. Армии Мидланда содрогнутся в страхе, когда Гриффит и Гатс вступят на путь, на котором им суждено поставить мир на колени.",
        tag: "00033"
    },

    "58390": {
        title: "Песнь ночных сов 2",
        genres: ["Сёнен", "Романтика", "Сверхъестественное"],
        point: "8,33",
        caption: "Нет описания",
        tag: "58390"
    },

    // "": {
    //     title: "",
    //     genres: ["", "", "", ""],
    //     point: "",
    //     caption: "",
    //     tag: ""
    // },
};

const random = getRandomOpening(openings);
const item = openings[random.id];

startBannerVideo.setAttribute("src", startBannerVideo.src + item.tag + "/opening.mp4");
startBannerInfoName.textContent = item.title;
startBannerInfoGenreOne.textContent = item.genres[0];
startBannerInfoGenreTwo.textContent = item.genres[1];
startBannerInfoGenreThree.textContent =item.genres[2];

if(!item.genres[3]) {
    startBannerInfoGenreFour.style.display = "none";
    startBannerInfoSlash.style.display = "none";
} else {
    startBannerInfoGenreFour.textContent = item.genres[3];
}

startBannerInfoPoint.textContent = item.point;
startBannerInfoCaption.textContent = item.caption;


















function startBannerVolume() {
    if(b == 0) {
        startBannerVideo.muted = false;
        startBannerButtonVolume.setAttribute("d", "M144 416L192 416L326.1 535.2C332.5 540.9 340.7 544 349.2 544C368.4 544 384 528.4 384 509.2L384 130.8C384 111.6 368.4 96 349.2 96C340.7 96 332.5 99.1 326.1 104.8L192 224L144 224C117.5 224 96 245.5 96 272L96 368C96 394.5 117.5 416 144 416zM476.6 245.5C466.3 237.1 451.2 238.7 442.8 249C434.4 259.3 436 274.4 446.3 282.8C457.1 291.6 464 305 464 320C464 335 457.1 348.4 446.3 357.3C436 365.7 434.5 380.8 442.8 391.1C451.1 401.4 466.3 402.9 476.6 394.6C498.1 376.9 512 350.1 512 320C512 289.9 498.1 263.1 476.5 245.5z")
        b = 1;
    } else {
        startBannerVideo.muted = true;
        startBannerButtonVolume.setAttribute("d", "M256 416L208 416C181.5 416 160 394.5 160 368L160 272C160 245.5 181.5 224 208 224L256 224L390.1 104.8C396.5 99.1 404.7 96 413.2 96C432.4 96 448 111.6 448 130.8L448 509.2C448 528.4 432.4 544 413.2 544C404.7 544 396.5 540.9 390.1 535.2L256 416z")
        b = 0;
    }
}

let s = 0;

const searchFormConstruction = document.getElementById("searchFormConstruction");
const searchFormSvgButton = document.getElementById("searchFormSvgButton");
const searchFormPathButton = document.getElementById("searchFormPathButton");
const searchFormInputSearch = document.getElementById("searchFormInputSearch");
const searchFormHr = document.getElementById("searchFormHr");
const searchFormResultsName = document.getElementById("searchFormResultsName");

function startSearchFormSearchAnime() {
    if(s == 0) {
        searchFormSearchAnime();
    } else {
        searchFormDontSearchAnime();
    }
}

function searchFormSearchAnime() {
    searchFormPathButton.setAttribute("d", "M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z");
    searchFormSvgButton.setAttribute("viewBox", "0 0 640 640");
    searchFormSvgButton.setAttribute("width", "26px");
    searchFormResultsName.style.opacity = "1";
    searchFormConstruction.style.width = "60%";
    
    setTimeout(() => {
        searchFormConstruction.style.transition = ".4s";
        searchFormConstruction.style.height = "85vh";
        setTimeout(() => {searchFormHr.style.opacity = "1"; s = 1;}, 125);
    }, 275);
}

function searchFormDontSearchAnime() {
    searchFormPathButton.setAttribute("d", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z");
    searchFormSvgButton.setAttribute("viewBox", "0 0 512 512");
    searchFormSvgButton.setAttribute("width", "22px");
    searchFormResultsName.textContent = "";
    searchFormActionClearSearchAnime();
    searchFormHr.style.opacity = "0";
    searchFormConstruction.style.height = "52px";
    
    searchFormInputSearch.setAttribute("disabled", "");
    
    setTimeout(() => {
        searchFormConstruction.style.transition = ".3s";
        searchFormConstruction.style.width = "33%";
        setTimeout(() => {searchFormInputSearch.removeAttribute("disabled", ""); s = 0;}, 175);
    }, 500);
}

animeLibraryRu = ["Необъятный океан", "Гатиакута", "Провожающая в последний путь Фрирен", "Дандадан 2"];

document.addEventListener('keydown', event => {  
    if (s == 1 && event.key === "Enter") {
        searchFormActionClearSearchAnime();
        searchFormActionSearchAnime();
    }     
});

function searchFormActionClearSearchAnime() {document.querySelectorAll(".search-form-results-item").forEach(el => el.style.display = 'none');};

function searchFormActionSearchAnime() {
    const query = searchFormInputSearch.value.trim().toLowerCase();

    if (!query) {return;};

    const results = animeLibraryRu.filter(item => item.toLowerCase().includes(query));
    searchFormResultsName.textContent = "Поиск " + '"' + searchFormInputSearch.value + '"' + ":";

    if (results.length === 0) return;

    results.forEach(name => {
        const map = {
            "необъятный океан": "resultsSearchAnimeGrandBlue",
            "гатиакута": "resultsSearchAnimeGachiakuta",
            "провожающая в последний путь фрирен": "resultsSearchAnimeSousouNoFrieren",
            "дандадан 2": "resultsSearchAnimeDandadanTwo"
        };

        const key = name.toLowerCase();
        const id = map[key];
        if (id) {
            const elid = document.getElementById(id);
            if (elid) elid.style.display = 'block';
        } else {
            console.warn('Не найден id для', name);
        }
    });
}