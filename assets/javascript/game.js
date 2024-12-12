$(document).ready(function () {
  let gundamFighter = {
    gundams: {
      ai: {
        health: 200,
        atk: 100,
        counAtk: 50,
        image: "assets/images/gundam-ai.jpeg",
      },
      angel: {
        health: 200,
        atk: 100,
        counAtk: 50,
        image: "assets/images/gundam-angel.jpeg",
      },
      freedom: {
        health: 200,
        atk: 100,
        counAtk: 50,
        image: "assets/images/gundam-freedom.jpeg",
      },
      laser: {
        health: 200,
        atk: 100,
        counAtk: 50,
        image: "assets/images/gundam-laser.jpeg",
      },
    },

    // creates image and container for gundams to be displayed
    buildGundam: function (key) {
      // gundam container
      let gundamDiv = $("<div>");
      gundamDiv.attr("class", "gundam-container");
      gundamDiv.html(
        "<h1 class='gundam-name'>" +
          key.toUpperCase() +
          "</h1>" +
          "<h1 class='gundam-health'>" +
          gundamFighter.gundams[key].health +
          "</h1>"
      );
      // gundam image
      let heroImg = $("<img>");
      heroImg.attr({
        src: gundamFighter.gundams[key].image,
        alt: key,
        class: "gundam-img",
        value: key,
      });
      gundamDiv.append(heroImg);
      return gundamDiv;
    },

    buildHeroGundam: function (key) {
      // gundam container
      let gundamDiv = $("<div>");
      gundamDiv.attr("class", "gundam-container");
      gundamDiv.html(
        "<h1 class='gundam-name'>" +
          key.toUpperCase() +
          "</h1>" +
          "<h1 class='gundam-health'>" +
          gundamFighter.gundams[key].health +
          "</h1>"
      );
      // gundam image
      let heroImg = $("<img>");
      heroImg.attr({
        src: gundamFighter.gundams[key].image,
        alt: key,
        class: "hero-gundam-img",
        value: key,
      });
      gundamDiv.append(heroImg);
      return gundamDiv;
    },

    buildEnemyGundam: function (key) {
      // gundam container
      let gundamDiv = $("<div>");
      gundamDiv.attr("class", "enemy-gundam-container");
      gundamDiv.html(
        "<h1 class='gundam-name'>" +
          key.toUpperCase() +
          "</h1>" +
          "<h1 class='gundam-health'>" +
          gundamFighter.gundams[key].health +
          "</h1>"
      );
      // gundam image
      let heroImg = $("<img>");
      heroImg.attr({
        src: gundamFighter.gundams[key].image,
        alt: key,
        class: "enemy-gundam-img",
        value: key,
      });
      gundamDiv.append(heroImg);
      return gundamDiv;
    },

    // displays gundams to page
    displayGundams: function () {
      $.each(this.gundams, function (key) {
        $("#character-select").append(gundamFighter.buildGundam(key));
      });
    },

    characterSelect: function (userPick) {
      $("#character-select").empty();
      $.each(this.gundams, function (key) {
        if (userPick === key) {
          $("#arena").append(gundamFighter.buildHeroGundam(key));
        } else {
          $("#enemies").append(gundamFighter.buildEnemyGundam(key));
        }
      });
    },

    enemySelect: function (userPick) {
      $.each(this.gundams, function (key) {
        if (userPick === key) {
          $("#arena").append(gundamFighter.buildEnemyGundam(key));
        }
      });
    },
  };

  gundamFighter.displayGundams();

  $("#character-select").on("click", ".gundam-img", function (e) {
    let userPick = e.target.alt;
    console.log("Hero Gundam: " + userPick);
    gundamFighter.characterSelect(userPick);
  });

  $("#enemies").on("click", ".enemy-gundam-img", function (e) {
    let userPick = e.target.alt;
    console.log("Enemy Gundam: " + userPick);
    gundamFighter.enemySelect(userPick);
    this.parentElement.remove();
  });
});
