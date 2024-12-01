const img = document.getElementById("portal");
const containter = document.getElementById("img-container");

const cycleImages = [
    "images/1ajtoqxf3nqd1.webp",
    "images/a-billboard-in-atlanta-right-after-the-storms-v0-su29phueuurd1.webp",
    "images/a-few-months-ago-at-the-kuala-lumpur-airport-does-it-count-v0-ac5t472pzksd1.webp",
    "images/activate-windows-taskbar-v0-j6ql06v8r5td1.webp",
    "images/android-samsung-phone-recovery-v0-4fca0zbt5vqd1.webp",
    "images/android-screen-on-display-v0-qpi6fdldo6td1.webp",
    "images/arcade-machines-bsod-v0-eja76lxp1lrd1.webp",
    "images/at-espai-girònes-spain-v0-tvv0ovxo0dsd1.webp",
    "images/at-the-doctors-v0-6pi721pfzjqd1.webp",
    "images/at-the-mall-v0-k51mgpxys5td1.webp",
    "images/back-at-it-once-again-v0-fn1fik2zaesd1.webp",
    "images/burger-king-drive-through-wörnitz-de-v0-132gzxwygdtd1.webp",
    "images/bus-display-v0-ef5mh3z4oyrd1.webp",
    "images/chrome-tab-out-of-memory-on-tv-screen-in-restaurant-it-was-v0-8l1q2tl4emqd1.webp",
    "images/cmd-at-tomorrowland-2024-w2-v0-ztyfud9u1rqd1.webp",
    "images/da87d9ic3qsd1.webp",
    "images/display-at-the-museum-of-science-and-industry-in-2021-v0-mw244ri8hftd1.webp",
    "images/doenershop-in-vienna-v0-emy3mo0ntdtd1.webp",
    "images/dont-strain-your-neck-same-thing-in-the-other-carriages-v0-5evxf66vurqd1.webp",
    "images/DowneyMcdonalds-750x400.jpg",
    "images/error-connecting-to-tpm-chip-in-barcelona-v0-qwi6c7pyftrd1.webp",
    "images/even-the-7-eleven-cigarette-display-is-old-enough-to-smoke-v0-34n7q8nhe8sd1.webp",
    "images/found-at-my-local-popeyes-v0-jf0c78l6rgsd1.webp",
    "images/found-this-at-a-target-price-scanner-v0-boc4hoxvxfrd1.webp",
    "images/höfe-am-brühl-leipzig-v0-74tj5ftogysd1.webp",
    "images/i-dont-feel-like-providing-any-kind-of-context-v0-9j951yqousrd1.webp",
    "images/ich-glaub-d-sbb-macht-einä-uf-open-sors-softwär-und-v0-h61ci06g54td1.webp",
    "images/IMG_5284.PNG",
    "images/IMG_5285.PNG",
    "images/IMG_5286.PNG",
    "images/IMG_5287.PNG",
    "images/IMG_5288.PNG",
    "images/IMG_5289.PNG",
    "images/IMG_5290.PNG",
    "images/IMG_5291.PNG",
    "images/IMG_5292.PNG",
    "images/IMG_5293.PNG",
    "images/IMG_5294.PNG",
    "images/IMG_5295.PNG",
    "images/IMG_5296.PNG",
    "images/IMG_5297.PNG",
    "images/IMG_5298.PNG",
    "images/IMG_5299.PNG",
    "images/IMG_5300.PNG",
    "images/IMG_5301.PNG",
    "images/IMG_5302.PNG",
    "images/IMG_5303.PNG",
    "images/IMG_5304.PNG",
    "images/IMG_5305.PNG",
    "images/IMG_5306.PNG",
    "images/IMG_5307.PNG",
    "images/IMG_5308.PNG",
    "images/IMG_5309.PNG",
    "images/IMG_5310.PNG",
    "images/IMG_5311.PNG",
    "images/IMG_5312.PNG",
    "images/IMG_5313.PNG",
    "images/IMG_5314.PNG",
    "images/IMG_5315.PNG",
    "images/IMG_5316.PNG",
    "images/IMG_5317.PNG",
    "images/IMG_5318.PNG",
    "images/IMG_5319.PNG",
    "images/IMG_5320.PNG",
    "images/IMG_5321.PNG",
    "images/IMG_5322.PNG",
    "images/IMG_5323.PNG",
    "images/in-my-high-school-v0-9m4zu7165vqd1.webp",
    "images/info-screen-in-space-expo-noordwijk-v0-0nb7q21s6hsd1.webp",
    "images/jerusalem-mall-malcha-v0-kj10eftv3qqd1.webp",
    "images/license-plate-monitoring-screen-has-no-internet-avellaneda-v0-namou8wmx6sd1.webp",
    "images/looks-like-someone-messed-up-v0-pmj01eq4f4td1.webp",
    "images/magicinfo-display-in-an-electronics-store-has-no-cable-v0-w3ui910zogtd1.webp",
    "images/mall-in-cologne-v0-htbhuvo1orsd1.webp",
    "images/nestle-ad-display-didnt-boot-good-v0-3u9nmh9g66rd1.webp",
    "images/not-sure-what-happened-here-v0-925xcu5hb4rd1.webp",
    "images/okay-fn-i-get-it-v0-ciqa6n9rr1td1.webp",
    "images/on-german-aldi-sued-v0-4qs2edy4f7rd1.webp",
    "images/on-ldp-highway-2022-v0-njey4tgkf8sd1.webp",
    "images/pharmacy-pick-up-counter-v0-egxwuiwdohtd1.webp",
    "images/photo-kiosk-logon-2009-v0-gnq998sft0rd1.webp",
    "images/sainsburys-self-service-pos-v0-g84livosdhtd1.webp",
    "images/second-time-i-have-seen-the-same-screen-like-this-v0-a5iljg17t3td1.webp",
    "images/seit-bald-drei-wochen-am-aldi-v0-6epli00ngzsd1.webp",
    "images/self-checkout-in-germany-v0-u4u0waf094sd1.webp",
    "images/shopping-for-some-clothes-in-madrid-v0-27130lz05fqd1.webp",
    "images/soda-machine-fail-v0-tgp01eb4j3td1.webp",
    "images/taken-at-a-sears-in-2018-v0-1vr5519yu4td1.webp",
    "images/taskbar-lol-at-ferry-port-in-calais-v0-agg8296czwqd1.webp",
    "images/the-megatrends-have-reached-cologne-v0-xgwu7x9b35sd1.webp",
    "images/this-digital-signage-has-a-terminal-case-of-i-o-errors-v0-a5hmuz6ygrrd1.webp",
    "images/throwback-to-the-crowdstrike-outage-at-this-mall-outside-v0-sbu5u41c50td1.webp",
    "images/time-squere-v0-ex7y2rdslrrd1.webp",
    "images/train-line-just-reopened-heres-what-the-display-had-to-say-v0-ex1ulo8l7lrd1.webp",
    "images/vending-machine-at-school-booting-linux-v0-xjuy7dhwgcrd1.webp",
    "images/vienna-icon-sod-v0-q1f13ilcsjsd1.webp",
    "images/warning-processor-v0-dr51vlj8jcrd1.webp"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function cycle() {
    img.src = cycleImages[getRandomInt(0, 107)];
    img.style.top = getRandomInt(0,70)+"vh";
    img.style.left = getRandomInt(0,70)+"vw";
    await new Promise(r => setTimeout(r, 2000));
    img.src = cycleImages[getRandomInt(0, 107)];
    img.style.top = getRandomInt(0,70)+"vh";
    img.style.left = getRandomInt(0,70)+"vw";
    await new Promise(r => setTimeout(r, 2500));
    img.src = cycleImages[getRandomInt(0, 107)];
    img.style.top = getRandomInt(0,70)+"vh";
    img.style.left = getRandomInt(0,70)+"vw";
    await new Promise(r => setTimeout(r, 5000));
    img.src = cycleImages[getRandomInt(0, 107)];
    img.style.top = getRandomInt(0,70)+"vh";
    img.style.left = getRandomInt(0,70)+"vw";
    await new Promise(r => setTimeout(r, 2500));
    cycle();
}

    // Function to create a new random image
    function createRandomImage(x, y) {
      const img = document.createElement('img');
      img.src = cycleImages[Math.floor(Math.random() * cycleImages.length)];
      img.classList.add('random-image');
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = `translate(-50%, -50%)`; // Centers the image at the cursor
      containter.appendChild(img);

      // Optional: Remove the image after some time
      setTimeout(() => img.remove(), 5000);
    }

    // Add event listener for mousemove
    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // Generate a random image at the mouse position
      createRandomImage(x, y);
    });
  

// cycle();