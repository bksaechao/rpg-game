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
    heroImg.css({ height: "300px", width: "225px" });
    gundamDiv.append(heroImg);
    return gundamDiv;
  },

  buildEnemyGundam: function (key) {
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
      class: "enemy-gundam-img",
      value: key,
    });
    heroImg.css({ height: "300px", width: "225px" });
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
        $("#arena").append(gundamFighter.buildGundam(key));
      } else {
        $("#enemies").append(gundamFighter.buildEnemyGundam(key));
      }
    });
  },
};

gundamFighter.displayGundams();

$(document).ready(function () {
  $(".gundam-img").click(function (e) {
    let userPick = e.target.alt;
    console.log(userPick);
    gundamFighter.characterSelect(userPick);
  });

  $(".enemy-gundam-img").click(function (e) {
    let userPick = e.target.alt;
  });
});
