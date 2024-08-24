document.addEventListener('DOMContentLoaded', () => {
  const welcomePopup = document.getElementById('welcome-popup');
  const agePopup = document.getElementById('age-popup');
  const mainContent = document.getElementById('main-content');
  const yesButton = document.getElementById('yes-btn');
  const noButton = document.getElementById('no-btn');
  const imageElement = document.getElementById('girl-image');
  const priceElement = document.getElementById('price');
  const nameElement = document.getElementById('name');
  const smashButton = document.getElementById('smash-btn');
  const passButton = document.getElementById('pass-btn');


  // Display age popup on any click on the welcome popup
  welcomePopup.addEventListener('click', () => {
    welcomePopup.classList.add('hidden');
    agePopup.classList.remove('hidden');
  });

  // Handle click on YES button
  yesButton.addEventListener('click', () => {
    agePopup.classList.add('hidden');
    mainContent.classList.remove('hidden');
    generateRandomImage();
  });

  // Handle click on NO button
  noButton.addEventListener('click', () => {
    alert('You must be 18 or older to enter this site.');
    window.location.href = 'https://acpeds.org/position-statements/the-impact-of-pornography-on-children'; // Redirect to another site or close the window
  });
  const imageUrls = [
    'https://api.papi.rest/media/girl_images/Aaliyah-Love-gets-fucked-and-jizzed-on-her-Feet_001_teaser_WwaYw26.jpg',
    'https://api.papi.rest/media/girl_images/vannabardot_teaser_E1WTRSi.jpg',
    'https://api.papi.rest/media/girl_images/annaclaireclouds-vertical_teaser_i63xb6x.jpg',
    'https://api.papi.rest/media/girl_images/Mindi-Mink-avatar-001_teaser_tx0DsN1.jpg',
    'https://api.papi.rest/media/girl_images/octaviared_teaser_w4w1YmL.jpg',
    'https://api.papi.rest/media/girl_images/alexistae-vertical_teaser_tkH4ift.jpg',
    'https://api.papi.rest/media/girl_images/Cory-Chase-avatar-001_teaser_YLQOZS8.jpg',
    'https://api.papi.rest/media/girl_images/kiranoir_teaser_Gcmb8YB.jpg',
    'https://api.papi.rest/media/girl_images/lizjordan_teaser_4S82lTm.jpg',
    'https://api.papi.rest/media/girl_images/lizjordan_teaser_4S82lTm.jpg',
    'https://api.papi.rest/media/girl_images/veronicaleal_teaser_cH7Bkul.jpg',
    'https://api.papi.rest/media/girl_images/Kayden-Kross-pulls-down-her-Panties-for-Anal-Sex_003_teaser_Xrs6vrr.jpg',
    'https://api.papi.rest/media/girl_images/Hot-Ava-Devine-exposing-huge-Tits-in-see-through-Dress_001_teaser_9pEY4fs.jpg',
    'https://api.papi.rest/media/girl_images/Anissa-Kate-penetrating-herself-with-a-big-rubber-Cock_004_teaser_5qzlAHM.jpg',
    'https://api.papi.rest/media/girl_images/sara-jay-avatar-1_teaser_Aa7rMBD.jpg',
    'https://api.papi.rest/media/girl_images/Cherry-Kiss-is-a-hot-Blonde-who-likes-to-suck-Cock-deep_003_teaser_lXmTDwq.jpg',
    'https://api.papi.rest/media/girl_images/Stunning-Milf-Cherie-Deville-fingering-her-Cunt_013_teaser_p9FSSOt.jpg',
    'https://api.papi.rest/media/girl_images/angelgostosa_teaser_fvacT01.jpg',
    'https://api.papi.rest/media/girl_images/katiekush-vertical_teaser_759K10a.jpg',
    'https://api.papi.rest/media/girl_images/phoenixmarie_teaser_YClV5nW.jpg',
    'https://api.papi.rest/media/girl_images/indiasummer_teaser_CilQEXI.jpg',
    'https://api.papi.rest/media/girl_images/tiffanytatum_teaser_uaGg7TH.jpg',
    'https://api.papi.rest/media/girl_images/natasha_teaser_PHE3u4n.jpg',
    'https://api.papi.rest/media/girl_images/Ryan-Reid-avatar_teaser_nA0w3JW.jpg',
    'https://api.papi.rest/media/girl_images/Gizelle-Blanco-avatar_teaser_c6Tf5xK.jpg',
    'https://api.papi.rest/media/girl_images/Lauren-Phillips-gets-on-Top-and-rides-big-Dong_001_teaser_zFYablo.jpg',
    'https://api.papi.rest/media/girl_images/Mia-Khalifa_teaser_jn8VynR.jpg',
    'https://api.papi.rest/media/girl_images/Sexy-Angela-White-gets-DPed-by-two-horny-Dudes_001_teaser_3A552Wk.jpg',
    'https://api.papi.rest/media/girl_images/Nikki-Benz-in-the-hot-Desert-in-just-her-Stockings_013_teaser_0t5UYfY.jpg',
    'https://api.papi.rest/media/girl_images/Abigail-Mac-exposes-her-pink-Pussy-by-a-Piano_001_teaser_gprVDhc.jpg',
    'https://api.papi.rest/media/girl_images/sera_teaser_s48AM9H.jpg',
    'https://api.papi.rest/media/girl_images/Sexy-Secretary-Penny-Pax-gets-nude-at-the-Office_001_teaser_XvZi78l.jpg',
    'https://api.papi.rest/media/girl_images/lulu_teaser_8eHitQV.jpg',
    'https://api.papi.rest/media/girl_images/danidaniels_teaser_5M1Z52X.jpg',
    'https://api.papi.rest/media/girl_images/Victoria-Rae-avatar-001_teaser_8VDqGqq.jpg',
    'https://api.papi.rest/media/girl_images/Pornstar-Riley-Reid-takes-Deepthroat-Challenge_001_teaser_xHO0lZ6.jpg',
    'https://api.papi.rest/media/girl_images/deewilliams_teaser_jkglsmq.jpg',
    'https://api.papi.rest/media/girl_images/bridgetteb_teaser_WlHQYkL.jpg',
    'https://api.papi.rest/media/girl_images/Dillion-Harper-enjoys-her-sex-Toy-on-Halloween_001_teaser_rdLeyr1.jpg',
    'https://api.papi.rest/media/girl_images/Alex-Grey-avatar-001_teaser_XsTxSWh.jpg',
    'https://api.papi.rest/media/girl_images/pumaswede_teaser_BGVVKsr.jpg'
  ];
  
  // const imageElement = document.getElementById('random-image');
  // const newImageBtn = document.getElementById('new-image-btn');

  
  function extractNameFromUrl(url) {
    const match = url.match(/\/girl_images\/([^_\/-]+)/);
    return match ? match[1] : 'Unknown';
  }
  
  function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex]; 
    imageElement.src = imageUrl;
    const randomPrice = Math.floor(Math.random() * (1999 - 999 + 1)) + 999;
    priceElement.textContent = randomPrice;
    nameElement.textContent = extractNameFromUrl(imageUrl);
  }



  smashButton.addEventListener('click', () => {
    const price = priceElement.textContent;
    const options = {
      "key": "rzp_test_bQ6qpRh0lGDsq4", // Replace with your Test Key ID from Razorpay Dashboard
      "amount": price * 100, // Amount in paisa
      "currency": "INR",
      "name": "Purchase",
      "description": "Random Girl Image",
      "image": imageElement.src,
      "handler": function (response){
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      "prefill": {
        "name": "Test User",
        "email": "test.user@example.com",
        "contact": "9876543210"
      },
      "theme": {
        "color": "#007bff"
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  });

  passButton.addEventListener('click', generateRandomImage);

  // const navButton = document.getElementsById('navImg');
  // const optionsList = document.getElementById('options-list');

  document.getElementById("navImg").onclick = function() {
    var secondDiv = document.getElementById("options-list");
    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "block";
    } else {
        secondDiv.style.display = "none";
    }
};
});
