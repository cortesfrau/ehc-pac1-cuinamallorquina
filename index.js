window.onload = function(){

  // Header Toggle
  document.getElementById('header-toggle').onclick = function(){
    this.classList.toggle('opened');
    document.getElementById('mobile-nav').classList.toggle('show');
    document.body.style.position = 'fixed';
  }

}
