var textarea  = document.querySelector('textarea');
var output = document.querySelector('.result')

textarea.addEventListener('keydown', function() {
  let text = this.value.split(" ");
  text = text.map( (i) => {
    console.log(i);
    console.log('i[0]', i[0]);
    if(i[0] == "#") {
      return `<a href='#'>${i}</a>`;
    }
    return  i;
  });
  output.innerHTML = text.join(" ");
});
