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

  // displays gundams to page
  displayGundams: function () {
    $.each(this.gundams, function (key) {
      // gundam container
      let gundamDiv = $("<div>");
      gundamDiv.attr("class", "gundam-container");
      gundamDiv.html("<h1 class='gundam-name'>" + key.toUpperCase() + "</h1>");
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
      $("#characters").append(gundamDiv);
    });
  },
};

gundamFighter.displayGundams();

$(document).ready(function () {
  $(".gundam-img").click(function (e) {
    // $("#character-select").empty();
    console.log(e.target.alt);
  });
});
