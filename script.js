<script>

function start() {

document.querySelector(".container").innerHTML = `

<h1>❤️ Наша история</h1>

<p>
Иногда самые важные люди появляются неожиданно.
<br><br>
И с этого момента начинается что-то особенное...
</p>

<button onclick="next()">Дальше 🌹</button>

`;

}


function next() {

document.querySelector(".container").innerHTML = `

<h1>✨ Немного о нас</h1>

<p>
Каждый момент вместе становится воспоминанием.
<br><br>
Я хочу сохранить самые тёплые моменты ❤️
</p>

<button onclick="gallery()">Наши моменты 📸</button>

`;

}


function gallery() {

document.querySelector(".container").innerHTML = `

<h1>📸 Наши моменты</h1>

<div class="gallery">

<img src="photo126.jpg">
<img src="photo127.jpg">
<img src="photo128.jpg">
<img src="photo129.jpg">
<img src="photo130.jpg">
<img src="photo131.jpg">
<img src="photo132.jpg">
<img src="photo133.jpg">
<img src="photo134.jpg">
<img src="photo135.jpg">

</div>

<br>

<button onclick="finish()">Дальше 💖</button>

`;

}


function finish() {

    firework();

    document.querySelector(".container").innerHTML = `

    <h1>❤️</h1>

    <h1>Ты выйдешь за меня?</h1>

    <p>
    Я люблю тебя всем сердцем.
    <br><br>
    Ты — самое лучшее, что случилось со мной.
    </p>

    <button onclick="answerYes()">Да ❤️</button>

    `;

      }
