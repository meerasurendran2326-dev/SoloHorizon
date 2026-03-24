// script.js

const data = {
    kerala: {
      "Thiruvananthapuram": [
        {
          name: "Kovalam Beach",
          description: "A serene beach with golden sands and lighthouses.",
          image: "https://images.app.goo.gl/QeGb6ZPc2b3HGsN78"
          
        },
        {
          name: "Padmanabhaswamy Temple",
          description: "Historic temple with intricate Dravidian architecture.",
          image: "https://images.app.goo.gl/ewURYShuzY3TK4au5"
        }
      ],
      "Kollam": [
        {
          name: "Ashtamudi Lake",
          description: "Known for its scenic backwaters and houseboat rides.",
          image: "https://images.app.goo.gl/LvHGWHPHqs6znv3i6"
        },
        {
          name: "Thenmala",
          description: "India’s first planned eco-tourism destination.",
          image: "https://images.app.goo.gl/8BTc31dXmQsazWMY7"
        }
      ],
      "Pathanamthitta": [
        {
          name: "Sabarimala",
          description: "Famous pilgrimage center in the hills.",
          image: "https://images.app.goo.gl/y6G6D"
        },
        {
          name: "Gavi",
          description: "A quiet, scenic forest haven.",
          image: "https://images.app.goo.gl/DcEWW"
        }
      ],
      "Alappuzha": [
        {
          name: "Alleppey Backwaters",
          description: "Cruise through lush backwaters on houseboats.",
          image: "https://images.app.goo.gl/DpTpny9Die469iQb7"
        },
        {
          name: "Marari Beach",
          description: "Unspoiled sandy beach with peaceful vibes.",
          image: "https://images.app.goo.gl/1ktzuhFtmjRcSknd8"
        }
      ],
      "Kottayam": [
        {
          name: "Vembanad Lake",
          description: "Longest lake in India, surrounded by greenery.",
          image: "https://images.app.goo.gl/UcprD9TxvkpWyPFx7"
        },
        {
          name: "Ilaveezha Poonchira",
          description: "A hilltop destination with panoramic views.",
          image: "https://images.app.goo.gl/tmkYSG28BeFVxcUe8"
        }
      ],
      "Idukki": [
        {
          name: "Munnar",
          description: "Picturesque hill station with tea plantations.",
          image: "https://images.app.goo.gl/dGJmUSyxX6cg7vqo9"
        },
        {
          name: "Idukki Dam",
          description: "Asia’s first arch dam set amidst forests.",
          image: "https://images.app.goo.gl/FaKasCEGg1gXbYh78"
        }
      ],
      "Ernakulam": [
        {
          name: "Fort Kochi",
          description: "Colonial streets and Chinese fishing nets.",
          image: "https://images.app.goo.gl/omdQ5vM2cvFvqUtu5"
        },
        {
          name: "Marine Drive",
          description: "Scenic promenade along the backwaters.",
          image: "https://images.app.goo.gl/qwsHPbijhKLxbFYU6"
        }
      ],
      "Thrissur": [
        {
          name: "Athirapally Falls",
          description: "Majestic waterfalls surrounded by lush forests.",
          image: "https://images.app.goo.gl/sBsB9waKyivzUc9H6"
        },
        {
          name: "Vadakkunnathan Temple",
          description: "Ancient temple with classic Kerala architecture.",
          image: "https://images.app.goo.gl/nWB5hm8CVtkUBbFW8"
        }
      ],
      "Palakkad": [
        {
          name: "Silent Valley National Park",
          description: "Biodiverse rainforest rich in flora and fauna.",
          image: "https://images.app.goo.gl/rHo2WiuyBpC2My8fA"
        },
        {
          name: "Palakkad Fort",
          description: "Historical fort built by Hyder Ali.",
          image: "https://images.app.goo.gl/JypQcxmi3qjbLsAu7"
        }
      ],
      "Malappuram": [
        {
          name: "Nilambur",
          description: "Known for teak plantations and forest beauty.",
          image: "https://images.app.goo.gl/dycgJ4fimZqb8cHS9"
        },
        {
          name: "Kottakkunnu",
          description: "Scenic hill garden with amusements.",
          image: "https://images.app.goo.gl/LgfNTgFTyEZjaexb9"
        }
      ],
      "Kozhikode": [
        {
          name: "Kappad Beach",
          description: "Historic beach where Vasco da Gama landed.",
          image: "https://images.app.goo.gl/95yUMFNbn7zzTP698"
        },
        {
          name: "Mananchira Square",
          description: "City park with a rich cultural vibe.",
          image: "https://images.app.goo.gl/KTi789sp5Ky79HzE6"
        }
      ],
      "Wayanad": [
        {
          name: "Edakkal Caves",
          description: "Prehistoric rock engravings in the hills.",
          image: "https://images.app.goo.gl/A8nzcX54Wa8BHBxy8"
        },
        {
          name: "Banasura Sagar Dam",
          description: "Largest earthen dam in India.",
          image: "https://images.app.goo.gl/iHkEMEh1vqNqgz7g9"
        }
      ],
      "Kannur": [
        {
          name: "Muzhappilangad Drive-in Beach",
          description: "India’s longest drive-in beach.",
          image: "https://images.app.goo.gl/Z4rzgvRxvLgsbZsH7"
        },
        {
          name: "St. Angelo Fort",
          description: "Seaside fort with colonial past.",
          image: "https://images.app.goo.gl/ZWNgXYLnM4LRka7B8"
        }
      ],
      "Kasaragod": [
        {
          name: "Bekal Fort",
          description: "Scenic fort by the sea with great views.",
          image: "https://images.app.goo.gl/JR6LDZTgWimgu5H37"
        },
        {
          name: "Ranipuram Hills",
          description: "Lush hills ideal for trekking and picnics.",
          image: "https://images.app.goo.gl/Zk7CgDKr8k3y5XVD8"
        }
      ]
    },
    goa: {
      "North Goa": [
        {
          name: "Baga Beach",
          description: "Popular beach for nightlife and water sports.",
          image: "https://images.app.goo.gl/HsS5vHTiETajkM9w9"
        },
        {
          name: "Fort Aguada",
          description: "17th-century Portuguese fort overlooking the sea.",
          image: "https://images.app.goo.gl/CVC4Ymzk72YRQ1SF8"
        }
      ],
      "South Goa": [
        {
          name: "Palolem Beach",
          description: "A peaceful crescent-shaped beach.",
          image: "https://images.app.goo.gl/2ByuXSZ9PyCVe5xy9"
        },
        {
          name: "Colva Beach",
          description: "Long beach with white sands and coconut palms.",
          image:"https://images.app.goo.gl/VWNUm6oyugEpyGi97"
          
        }
      ]
    }
  };
  
  const stateSelect = document.getElementById("stateSelect");
  const districtSelect = document.getElementById("districtSelect");
  const spotsContainer = document.getElementById("spotsContainer");
  
  stateSelect.addEventListener("change", () => {
    const state = stateSelect.value;
    districtSelect.innerHTML = '<option value="" disabled selected>Select a district</option>';
  
    if (data[state]) {
      districtSelect.disabled = false;
      Object.keys(data[state]).forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    } else {
      districtSelect.disabled = true;
    }
  
    spotsContainer.innerHTML = "";
  });
  
  districtSelect.addEventListener("change", () => {
    const state = stateSelect.value;
    const district = districtSelect.value;
    const spots = data[state][district];
  
    spotsContainer.innerHTML = spots.map(spot => `
      <div class="spotCard">
        <img src="${spot.image}" alt="${spot.name}" />
        <h3>${spot.name}</h3>
        <p>${spot.description}</p>
      </div>
    `).join('');
  });
  