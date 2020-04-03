upbutton = document.getElementById("up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "";
  } else {
    upbutton.style.display = "none";
  }
}

  var vid1 = document.getElementById("video1");
  var vid2 = document.getElementById("video2");

  var body = document.getElementById("body");

  var one = document.getElementById("1");
  var two = document.getElementById("2");
  var three = document.getElementById("3");
  var four = document.getElementById("4");
  var five = document.getElementById("5");
  var six = document.getElementById("6");

  var increase = document.getElementById("increase");
  var decrease = document.getElementById("decrease");

  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  const stop1 = document.querySelector(".stop1");
  const forward = document.querySelector(".forward");
  const rewind = document.querySelector(".rewind");
  const time = document.querySelector(".time");
  const progress1 = document.querySelector(".progress1");
  const sub1 = document.querySelector(".sub1");

  const play1 = document.querySelector(".play1");
  const pause1 = document.querySelector(".pause1");
  const stop2 = document.querySelector(".stop2");
  const forward1 = document.querySelector(".forward1");
  const rewind1 = document.querySelector(".rewind1");
  const time1 = document.querySelector(".time1");
  const progress2 = document.querySelector(".progress2");
  const sub2 = document.querySelector(".sub2");
  upbutton.onclick = function() {

one.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

};

  var lyrics = document.getElementById("lyrics");
  var lyricsbut = document.getElementById("lyricsbut");

  // Resize the text when you click on the increase and decrease buttons
  function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize =
      parseFloat(document.body.style.fontSize) + multiplier * 0.2 + "em";

    one.style.fontSize =
      parseFloat(one.style.fontSize) + multiplier * 0.2 + "em";
    two.style.fontSize =
      parseFloat(two.style.fontSize) + multiplier * 0.2 + "em";
    three.style.fontSize =
      parseFloat(three.style.fontSize) + multiplier * 0.2 + "em";
    four.style.fontSize =
      parseFloat(four.style.fontSize) + multiplier * 0.2 + "em";
    five.style.fontSize =
      parseFloat(five.style.fontSize) + multiplier * 0.2 + "em";
    six.style.fontSize =
      parseFloat(six.style.fontSize) + multiplier * 0.2 + "em";
  }

  increase.onclick = function() {
    resizeText(1);
  };

  decrease.onclick = function() {
    resizeText(-1);
  };

  // Show transcript of lyrics when you click on the button
  lyricsbut.onclick = function() {
    if (lyrics.style.visibility == "hidden") {
      lyrics.style.visibility = "visible";
      lyrics.style.opacity = 1;
    } else {
      lyrics.style.opacity = 0;
      lyrics.style.visibility = "hidden";
    }
  };

  // TV show controls
  sub1.onclick = function() {
    if (vid1.textTracks[0].mode == "hidden") {
      vid1.textTracks[0].mode = "showing";
    } else {
      vid1.textTracks[0].mode = "hidden";
    }
  };
  play.onclick = function() {
    vid1.play();
  };

  sub1.onclick = function() {
    vid1.play();
  };

  pause.onclick = function() {
    vid1.pause();
  };

  stop1.onclick = function() {
    vid1.pause();
    vid1.currentTime = 0;
    time.textContent = "0:00";
    progress1.value = 0;
  };

  rewind.onclick = function() {
    vid1.currentTime -= 3;
  };

  forward.onclick = function() {
    vid1.currentTime += 3;
    if (vid1.currentTime >= vid1.duration || vid1.paused) {
      vid1.pause();
      vid1.currentTime = 0;
      time.textContent = "0:00";
      progress1.value = 0;
    }
  };

  vid1.ontimeupdate = function() {
    let minutes = Math.floor(vid1.currentTime / 60);
    let seconds = Math.floor(vid1.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
    let mediaTime;

    if (minutes < 10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
    if (seconds < 10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }

    progress1.value = Math.floor((vid1.currentTime / vid1.duration) * 100);

    mediaTime = minuteValue + ":" + secondValue;
    time.textContent = mediaTime;
  };

  // Movie controls
  sub2.onclick = function() {
    if (vid2.textTracks[0].mode == "hidden") {
      vid2.textTracks[0].mode = "showing";
    } else {
      vid2.textTracks[0].mode = "hidden";
    }
  };
  play1.onclick = function() {
    vid2.play();
  };

  sub2.onclick = function() {
    vid2.play();
  };

  pause1.onclick = function() {
    vid2.pause();
  };

  stop2.onclick = function() {
    vid2.pause();
    vid2.currentTime = 0;
    time1.textContent = "0:00";
    progress2.value = 0;
  };

  rewind1.onclick = function() {
    vid2.currentTime -= 3;
  };

  forward1.onclick = function() {
    vid2.currentTime += 3;
    if (vid2.currentTime >= vid2.duration || vid2.paused) {
      vid2.pause();
      vid2.currentTime = 0;
      time1.textContent = "0:00";
      progress2.value = 0;
    }
  };

  vid2.ontimeupdate = function() {
    let minutes = Math.floor(vid2.currentTime / 60);
    let seconds = Math.floor(vid2.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
    let mediaTime;

    if (minutes < 10) {
      minuteValue = "0" + minutes;
    } else {
      minuteValue = minutes;
    }
    if (seconds < 10) {
      secondValue = "0" + seconds;
    } else {
      secondValue = seconds;
    }

    progress2.value = Math.floor((vid2.currentTime / vid2.duration) * 100);

    mediaTime = minuteValue + ":" + secondValue;
    time1.textContent = mediaTime;
  };