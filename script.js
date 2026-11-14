// Keyinchalik bu massivni API dan keladigan ma'lumotlar bilan almashtirish mumkin
const imagesData = [
  { id: 1, url: './samolyotlar/Airbus A320neo.jpg', title: 'a320' },
  { id: 2, url: './samolyotlar/Boeing 737-800.jpg', title: 'b737' },
  { id: 3, url: './samolyotlar/Bombardier CRJ200.jpg', title: 'crj200' },
  { id: 4, url: './samolyotlar/cessna 172 skyhawk.jpg', title: 'cessna' },
  { id: 5, url: './samolyotlar/Boeing 777-300ER.jpg', title: 'b300' },
  { id: 6, url: './samolyotlar/Airbus A350-900.jpg', title: 'a350' }
];




let gallery = document.getElementById('gallery');

let input = document.getElementById('search-input');

imagesData.forEach((image) => {
  let yangiRasm = document.createElement('img');
  yangiRasm.src = image.url;
  yangiRasm.alt = image.title;
  yangiRasm.classList.add('gallery-image');
  gallery.appendChild(yangiRasm);
})


input.addEventListener('input', function () {

  let searchTerm = input.value.toLowerCase();

  // Galereyadagi barcha rasm elementlarini olish
  let allImages = document.querySelectorAll('.gallery-image');

  allImages.forEach((img) => {
    // Rasmning alt atributini tekshirish
    if (img.alt.toLowerCase().includes(searchTerm)) {
      img.style.display = 'block'; // Rasmni ko'rsatish
    } else {
      img.style.display = 'none'; // Rasmni yashirish
    }
  });
})




