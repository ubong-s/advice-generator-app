const adviceBtn = document.querySelector('.btn');

const fetchAdvice = async () => {
   const adviceNumber = document.querySelector('.advice-no');
   const adviceText = document.querySelector('.advice-text');

   adviceNumber.textContent = `Loading...`;
   adviceText.textContent = `Loading...`;

   try {
      const res = await fetch('https://api.adviceslip.com/advice');
      data = await res.json();

      adviceNumber.textContent = `Advice #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
   } catch (error) {
      adviceNumber.textContent = `Advice #`;
      adviceText.textContent = `Error fetching. Refresh`;
      console.log(error);
   }
};

window.addEventListener('DOMContentLoaded', () => {
   fetchAdvice();
});

adviceBtn.addEventListener('click', (e) => {
   e.stopPropagation();
   fetchAdvice();
});
