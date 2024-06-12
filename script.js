"use strict";

let images = [
  {
    imageName: "Rose",
    imageUrl:
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Rose image",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Table",
    imageUrl:
      "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV8ZW58MHx8MHx8fDA%3D",
    imageAlt: "Table image",
    imageLikes: "1.1m Likes - 4.4m shares",
  },
  {
    imageName: "Gaming",
    imageUrl:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "gaming Image",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Gaming parlor",
    imageUrl:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Gaming parlor",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Console",
    imageUrl:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "console",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Flying Gaming Pad",
    imageUrl:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Flying Gaming Pad",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Wallpaper",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
    imageAlt: "Wallpaper",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Man looking sences",
    imageUrl:
      "https://images.pexels.com/photos/20063018/pexels-photo-20063018/free-photo-of-taipei-101-behind-man-silhouette-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Man looking sences",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Black and white rose",
    imageUrl:
      "https://images.pexels.com/photos/20881838/pexels-photo-20881838/free-photo-of-black-and-white-photograph-of-a-flower-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Black and white rose",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Cat sleeping",
    imageUrl:
      "https://images.pexels.com/photos/25184787/pexels-photo-25184787/free-photo-of-ginger-cat-sleeping-curled-up-in-a-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Cat sleeping",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "man riding cycle",
    imageUrl:
      "https://images.pexels.com/photos/25016476/pexels-photo-25016476/free-photo-of-cyclist-riding-on-a-wet-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "man riding cycle",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Building",
    imageUrl:
      "https://images.pexels.com/photos/25104109/pexels-photo-25104109/free-photo-of-a-building-with-a-reflection-of-a-boat-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Building",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "crowed people",
    imageUrl:
      "https://images.pexels.com/photos/25772368/pexels-photo-25772368/free-photo-of-piazza-san-marco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "crowed people",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "orange juice",
    imageUrl:
      "https://images.pexels.com/photos/25391643/pexels-photo-25391643/free-photo-of-fruit-lemonade-with-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "orange juice",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Kitten",
    imageUrl:
      "https://images.pexels.com/photos/25398096/pexels-photo-25398096/free-photo-of-golden-gaze-the-enigmatic-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Kitten",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "stone",
    imageUrl:
      "https://images.pexels.com/photos/25312055/pexels-photo-25312055/free-photo-of-pile-of-stones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "stone",
    imageLikes: "245 Likes - 35 shares",
  },
  {
    imageName: "Radha Krishna",
    imageUrl:
      "https://images.pexels.com/photos/19576757/pexels-photo-19576757/free-photo-of-sculptures-of-hindu-gods-radha-and-krishna-in-dev-mandir-temple-of-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Radha Krishna",
    imageLikes: "Million of infinite Likes - infinite shares",
  },
  {
    imageName: "Lord of the universe",
    imageUrl:
      "https://images.pexels.com/photos/12462434/pexels-photo-12462434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Lord of the universe",
    imageLikes: "Infinite Likes - infinite shares",
  },
  {
    imageName: "Srila Prabhupad ji",
    imageUrl:
      "https://images.unsplash.com/photo-1695824397018-31fa9e2b7a2e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Srila Prabhupad ji",
    imageLikes: "1trillion Likes - 36trillion shares",
  },
];

function insertImages() {
  let insert = "";

  images.forEach(function (obj) {
    insert += `<a href="${obj.imageUrl}" target="blank"><div class="relative group break-inside-avoid md:w-64 py-1 overflow-hidden">
            <img src="${obj.imageUrl}" alt="${obj.imageAlt}" />
            <div
            class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opactiy-40"
          >
            <div class="flex justify-between w-full h-55">
              <div class="font-normal">
                <p class="text-sm">${obj.imageName}</p>
                <p class="text-xs">${obj.imageLikes}</p>
              </div>
            </div>
          </div>
          </div></a>`;
    console.log(obj.imageAlt);
  });

  let insertToHtml = document.querySelector(".image-box");
  insertToHtml.innerHTML = insert;
}

insertImages();
