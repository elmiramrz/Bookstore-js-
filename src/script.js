
/*
Student Name:Elmira Mirza
Student Id:130828197
email:emirza2@myseneca.ca
*/
window.onload = function () {
    var x=document.getElementById("picdiv");
    function changeImage() {   
        var BackgroundImg=["/images/chuttersnap-1_Aojfv58_s-unsplash.jpg",
            "/images/robert-anasch-McX3XuJRsUM-unsplash.jpg",
            "/images/taisiia-shestopal-X97mcr8NPDQ-unsplash.jpg",
        ];
        var i = Math.floor((Math.random() * 2));
        x.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 1000);
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function hide(){
document.getElementById("dorder").style.display="none";
document.getElementById("tOrder").required=false;
  }
  function show(){
    document.getElementById("dorder").style.display="block";
document.getElementById("tOrder").required=false;
  }
 

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

var books=[
{"name":"THE WORLD NEEDS MORE PURPLE PEOPLE",
"category":"Kid",
"description":"Actress, producer, and parent Kristen Bell (The Good Place, Veronica Mars, Frozen) and creative director and parent Benjamin Hart have a new challenge for you and your kids: become a purple person by embracing what makes YOU special while finding common ground with those around you.",
"price":"12.00 CAD",
"image":"\images\frank-mckenna-mJB9q4zo138-unsplash.jpg"
},
{"name":"WELCOME TO THE PARTY",
"category":"Kid",
"description":"byGabrielle Union,",
"price":"23.12CAD",
"image":"\images\josh-applegate-p_KJvKVsH14-unsplash.jpg"
},
{"name":"MIDNIGHT SUN",
"category":"New",
"description":"byStephenie Meyer,When Edward Cullen and Bella Swan met in Twilight, an iconic love story was born. But until now, fans have heard only Bella''s side of the story. At last, readers can experience Edward''s version in the long-awaited companion novel, Midnight Sun.",
"price":"41.97CAD",
"image":"\images\nong-vang-0b4QY1ZkdYg-unsplash.jpg"
},
{"name":"THE HEIR AFFAIR",
"category":"New",
"description":"byHeather Cocks, Jessica Morgan,Making it up the aisle was the easy part: Rebecca Bex Porter must survive her own scandals and adjust to royal British life in this timely and positively delicious follow-up toThe Royal Wethat''s just as fun, charming, and delightful as the first (Taylor Jenkins Reid)",
"price":"6.00CAD",
"image":"\images\rashtravardhan-kataria-m-D_PAxLcTo-unsplash.jpg"
},
{"name":"TAKECARE NON-MEDICAL FACE MASK BLUE SET OF 3",
"category":"Gift",
"description":"Carefully researched, evidence-based and thoughtfully designed, the Precision Non-Medical Face Mask is designed to have a tighter fit on the face",
"price":"11.50CAD",
"image":"\images\vera-davidova-cuzH5S-8ZOQ-unsplash.jpg"
},
{"name":"PADDED SLEEP MASK NAVY",
"category":"Gift",
"description":"Style that speaks volumes. Create a sleep-friendly space whenever, wherever with the Padded Sleep Mask.",
"price":"19.87CAD",
"image":"\images\nong-vang-0b4QY1ZkdYg-unsplash.jpg"
},
{"name":"SILK SCRUNCHIES SET OF 3",
"category":"Gift",
"description":"Style that speaks volumes. The Love & Lore Silk Scrunchies are a perfect everyday staple no matter the occasion",
"price":"54.76CAD",
"image":"\images\victoria-priessnitz-ekTh9lG3twk-unsplash.jpg"
},
{"name":"DIAMOND BORDER NECKERCHIEF CORAL",
"category":"Gift",
"description":"Style that speaks volumes. Master 'Parisian chic' with the Love & Lore Diamond Border Neckerchief.",
"price":"22.00CAD",
"image":"\images\josh-felise-yIMy3ERBc3o-unsplash.jpg"
},
{"name":"KEYCHAIN ID WALLET BLUE MATCHSTIX",
"category":"Gift",
"description":"Style that speaks volumes. The Love & Lore Keychain ID Wallet is crafted from blue vegan leather elevated by a playful matchstick print paired with chic gold tone hardware",
"price":"18.88CAD",
"image":"\images\sincerely-media-CXYPfveiuis-unsplash.jpg"
},
{"name":"GEO PILLAR CANDLE BUFF LARGE",
"category":"Gift",
"description":"esigned in three shapes and sizes, the unfragranced Geo pillar candles are the definition of eye-catching modern. Measures 9tall, burn time approximately 60 hours.",
"price":"40.21CAD",
"image":"\images\esther-wilhelmsson-mFTOFzUKdl0-unsplash.jpg"
},
{"name":"KING PILLOW",
"category":"Gift",
"description":" The inner pillow is supportive, while the outer pillow adds a soft touch of fluff. Plus, the Casper pillow is machine washable for easy care. 100% cotton cover, polyester fabric lining, polyester microfiber fill.",
"price":"54.74CAD",
"image":"\images\teri-iX10zeJA8po-unsplash.jpg"
},
{"name":"STANDARD PILLOW",
"category":"Gift",
"description":"100% cotton cover, polyester fabric lining, polyester microfiber fill. Machine-wash, tumble dry. 8” L x 26” W x 2” gusset",
"price":"32.00CAD",
"image":"\images\jude-infantini-gRZmKaFUpBM-unsplash.jpg"
},
{"name":"FLOOR PILLOW – PINK",
"category":"Gift",
"description":"Stylish and sturdy, our tufted Floor Pillow in pink cotton twill is generously sized and has a dense poly-fill for enduring support. Have a few handy for impromptu extra seating when friends show up or use it for cushioned support while meditating or relaxing",
"price":"41.23CAD",
"image":"\images\joseph-greve-HmEzQFBpZP0-unsplash.jpg"
},
{"name":"VELVET PILLOW COVER – PEBBLE, 18” X 18”",
"category":"Gift",
"description":"A classic velvet pillow gets a beautiful refresh with a smooth, suede-like face and a linen-like back. Our pillow cover in soft pale grey has a warm, approachable vibe that makes it an easy fit in any setting, from traditional to modern. The natural linen back adds unexpected texture and makes a smooth transition to fall",
"price":"21.45CAD",
"image":"\images\content-pixie-k8AlRsl7L8E-unsplash.jpg"
},



{"name":"THE BODY KEEPS THE SCORE: BRAIN, MIND, AND BODY IN THE HEALING OF TRAUMA",
"category":"Best",
"description":"byBessel Van Der Kolk,Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics",
"price":"10.00CAD",
"image":"\images\thought-catalog-DxAzOKSiPoE-unsplash.jpg"
},
{"name":"THE POWER OF NOW: A GUIDE TO SPIRITUAL ENLIGHTENMENT",
"category":"Best",
"description":"byEckhart Tolle,A contemporary spiritual master shows how living in the present leads to a happier, healthier, more fulfilling life Much more than simple principles and platitudes, The Power of Now takes readers on an inspiring spiritual journey to find their true and deepest self and reach the ultimate in personal growth ",
"price":"23.98CAD",
"image":"\images\thought-catalog-V5BGaJ0VaLU-unsplash.jpg"
}]
