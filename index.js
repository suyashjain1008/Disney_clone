let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier, set after 2019's Avengers: Endgame, is about two Marvel superheroes, namesakes Falcon (Anthony Mackie) and Winter Soldier (Sebastian Stan), as they team up on a globe-trotting thriller to take down an old enemy, Baron Zemo (Daniel Brühl).",
      image: "slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Loki is the main antagonist in Thor and The Avengers and a supporting protagonist in Thor: The Dark World. Loki was Adopted by Odin and Frigga at the end of the Asgardians' war with the Jotuns, Loki was treated as a prince of Asgard and never informed of his true heritage throughout his youth.",
      image: "slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff and Vision, two super-powered beings living their ideal suburban lives, begin to suspect that everything is not as it seems.",
      image: "slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Kelly Marie Tran as Raya, the fierce and courageous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem. To change her father from stone back into himself and restore peace to Kumandra, she embarks on a search for the last dragon. Awkwafina as Sisu, the last dragon in existence.",
      image: "slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
      image: "slider 5.PNG"
    }
  ];
  
  const caraousel = document.querySelector(".caraousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let contaierWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += contaierWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= contaierWidth + 200;
    });
  });