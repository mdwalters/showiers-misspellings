const img = [
    { "url": "https://u.cubeupload.com/MDWalters/l1taQH.png", "alt": "Geyser, not Guyser" },
    { "url": "https://forums.meower.org/uploads/default/original/1X/6ab99eb0f931c8e28306deb844bc5a1abda457bb.png", "alt": "I'm pretty sure the word \"just\" only has one \"s\" in it..." },
    { "url": "https://u.cubeupload.com/MDWalters/nchYfZ.png", "alt": "Did you mean CST?" },
    { "url": "https://u.cubeupload.com/MDWalters/qmO9Nd.png", "alt": "Svelite sounds like a lighter version of Svelte" },
    { "url": "https://u.cubeupload.com/MDWalters/f9Nerq.png", "alt": "Svelite sounds like a lighter version of Svelte" },
    { "url": "https://meowerimg.codeflip.repl.co/static/Screen_Shot_2023-01-16_at_6.19.41_PM.png", "alt": "We all know Showier doesn't have Grammarly" }
];
const random_img = img[Math.floor(Math.random() * img.length)];
document.getElementById("img").setAttribute("src", random_img.url);
document.getElementById("img").setAttribute("alt", random_img.alt);
document.getElementById("img-alt").innerHTML = random_img.alt;