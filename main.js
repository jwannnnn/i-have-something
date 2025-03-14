
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titles = ('I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;
    const title = document.querySelector('.title')
    const text = 'I Have Something'.split('')
    for (let index = 0; index < text.length; index++) {
      if (text[index] !== ' ') {
        title.innerHTML += `<span>${text[index]}<span/>`
      } else {
        title.innerHTML += `<span style='margin-right: 20px;'><span/>`
      }
    }
    
    const textElements = document.querySelectorAll('.title span');
    textElements.forEach((element) => {
      const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
      element.style.animationDelay = `${randomDelay}s`;
    });
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }
    window.onload = () => {
      console.log("JavaScript Loaded!");
      const title = document.querySelector('.title')
      const text = 'I Have Something'.split('')
      for (let index = 0; index < text.length; index++) {
        if (text[index] !== ' ') {
          title.innerHTML += `<span>${text[index]}<span/>`
        } else {
          title.innerHTML += `<span style='margin-right: 20px;'><span/>`
        }
      }
      
      const textElements = document.querySelectorAll('.title span');
      textElements.forEach((element) => {
        const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
        element.style.animationDelay = `${randomDelay}s`;
      });
      // Tambahkan elemen baru ke dalam body
      let questionText = document.createElement("h2");
      questionText.textContent = "Do you want to be my GF?";
      questionText.classList.add("question");
  
      // Tambahkan ke dalam halaman
      document.body.appendChild(halooo);
  };
  
    appendTitle();

    clearTimeout(c);
  }, 1000);
};
