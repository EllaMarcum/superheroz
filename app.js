const hero = {
  Gandalf: {
    health: 100,
    lv: 0,
    status: 'alive',
    img: 'https://th.bing.com/th/id/R.6990db9caf2e499b4b69a4b28e29637b?rik=c9mm8cevOSRxtw&riu=http%3a%2f%2fimg07.deviantart.net%2f72af%2fi%2f2011%2f345%2ff%2f0%2fi_geek_weekly__gandalf_the_grey_by_joshuafitzpatrick-d4iufqz.png&ehk=5C1BwJIW1HQSLERf7KDG%2fNepgVD3K%2bFx1k2h4AdOst4%3d&risl=&pid=ImgRaw&r=0',
  },
}
const boss = {
  balrog: {
    health: 100,
    lv: 0,
    status: 'alive',
    img: 'https://designlooter.com/images/balrog-coloring-18.jpg',
  },
}



function drawHero() {
  let template = ""
  for (let key in hero) {
    let chars = hero[key]
    console.log(hero.health)
    template += ` 
    <div class="col-3 hero-thing">
    <div class="m-0"><b>NAME : ${key}</b></div>
    <img class="align-items-left "src="${chars.img}" class="m-1">
    <p><b>HP : ${chars.health}</b></p>
    <p><b>Lvl : ${chars.lv}</b></p>
</div>`
    let charElm = document.getElementById('char')
    charElm.innerHTML = template
  }

}


function drawBoss() {
  let template = ""
  for (let key in boss) {
    let chars = boss[key]
    console.log(boss, "charater")
    template += `         
    <div class="col-10 offset-1 boss-card text-center" onclick="attack('${key}')">
    <div class="m-0"><b>NAME : ${key}</b></div>
    <img class="align-items-left m-1"
      src="${chars.img}">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
        aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
        style="width: ${chars.health}%"></div>
    </div>
    <p><b>Lvl : ${chars.lv}</b></p>
  </div>
    `
    let charElm = document.getElementById('boss')
    charElm.innerHTML = template
  }

}
drawHero()
drawBoss()

function attack(key) {
  let chars = boss[key]
  console.log("attacking", key, chars)
  if (chars.health > 0) {
    chars.health -= 5;
  }
  drawBoss()
}