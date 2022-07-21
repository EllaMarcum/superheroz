const hero = {
  Gandalf: {
    health: 100,
    lv: 0,
    status: 'ready to kick ass'
  },
}
const boss = {
  Balrog: {
    health: 100,
    lv: 0,
    status: 'evil mofo'
  },
}



function drawHero() {
  let template = ""
  for (let key in hero) {
    let chars = hero[key]
    console.log(hero, "charater")
    template += ` 
    <div class="col-3 hero-thing">
    <div class="m-0">NAME : FRANK</div>
    <img class="align-items-left "src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.6990db9caf2e499b4b69a4b28e29637b%3Frik%3Dc9mm8cevOSRxtw%26riu%3Dhttp%253a%252f%252fimg07.deviantart.net%252f72af%252fi%252f2011%252f345%252ff%252f0%252fi_geek_weekly__gandalf_the_grey_by_joshuafitzpatrick-d4iufqz.png%26ehk%3D5C1BwJIW1HQSLERf7KDG%252fNepgVD3K%252bFx1k2h4AdOst4%253d%26risl%3D%26pid%3DImgRaw%26r%3D0" class="m-1">
    <p><b>HP : X</b></p>
    <p><b>Lvl : 4</b></p>
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
    <div class="col-10 offset-1 boss-card text-center" >
    <div class="m-0">NAME : FRANK</div>
    <img class="align-items-left m-1"
      src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.6990db9caf2e499b4b69a4b28e29637b%3Frik%3Dc9mm8cevOSRxtw%26riu%3Dhttp%253a%252f%252fimg07.deviantart.net%252f72af%252fi%252f2011%252f345%252ff%252f0%252fi_geek_weekly__gandalf_the_grey_by_joshuafitzpatrick-d4iufqz.png%26ehk%3D5C1BwJIW1HQSLERf7KDG%252fNepgVD3K%252bFx1k2h4AdOst4%253d%26risl%3D%26pid%3DImgRaw%26r%3D0"
      class="m-1">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
        aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
        style="width: 100%"></div>
    </div>
    <p><b>Lvl : 4</b></p>
  </div>
    `
    let charElm = document.getElementById('boss')
    charElm.innerHTML = template
  }

}
drawHero()
drawBoss()