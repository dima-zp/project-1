function scrollLeft() {
  document.getElementById('slider').scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollRight() {
  document.getElementById('slider').scrollBy({ left: 300, behavior: 'smooth' });
}
// function overboxzapis() {
//   document.getElementById("bookingForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("bookingForm").style.display = "none";
// }
function toggleMenu() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

function openFeedback() {
  document.getElementById("feedbackModal").style.display = "block";
}
function closeFeedback() {
  document.getElementById("feedbackModal").style.display = "none";
}

  // function overboxzapis() {
  //   document.getElementById("bookingForm").style.display = "block";
  // }

  // function closeForm() {
  //   document.getElementById("bookingForm").style.display = "none";
  // }


   const images = document.querySelectorAll('.gallery-container img');
    const prevBtn = document.querySelector('.arrow.left');
    const nextBtn = document.querySelector('.arrow.right');
    let current = 0;

    function showImage(index) {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showImage(current);
    });