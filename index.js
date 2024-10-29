let shreIcon = document.getElementById("share-icon");
let shreIconMob = document.getElementById("share-icon-mobile");
window.addEventListener("resize", (event) => {
  console.log(event.target.innerWidth);
  document.getElementById("footer-card").style.display = "flex";
  document.getElementById("footer-card-mobile").style.display = "none";
  if (event.target.innerWidth <= 845) {
    shreIcon.addEventListener(
      "click",
      function () {
        document.getElementById("footer-card").style.display = "none";
        document.getElementById("footer-card-mobile").style.display = "flex";
      },
      true
    );

    shreIconMob.addEventListener(
      "click",
      function () {
        document.getElementById("footer-card").style.display = "flex";
        document.getElementById("footer-card-mobile").style.display = "none";
      },
      true
    );
  } else {
    shreIcon.addEventListener(
      "click",
      function () {
        document.getElementById("footer-card").style.display = "flex";
        document.getElementById("footer-card-mobile").style.display = "none";
      },
      true
    );
  }
});
