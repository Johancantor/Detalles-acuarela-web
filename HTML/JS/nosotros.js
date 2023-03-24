
one.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      one.style.bottom= timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

two.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      two.style.bottom= timePassed / 5 + 'px';

      if (timePassed > 990) clearInterval(timer);

    }, 20);

}

three.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      three.style.bottom= timePassed / 5 + 'px';

      if (timePassed > 1500) clearInterval(timer);

    }, 20);
}

