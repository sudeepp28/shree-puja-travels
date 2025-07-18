import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone:false,
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials = [
     {
      heading:'"A truly hassle-free experience!"',
      text:'We booked a Tempo Traveller for our Tirupati Balaji trip. The cab was clean, the driver was punctual and polite, and the whole journey was very comfortable. I will definitely book again!',
      name: "Sana Khan, Mumbai",
      location: "Customer, rented a Traveler",
      image: "assets/t1.jpeg"
    },
     {
      heading:'"Great service and professional staff!"',
      text:'I hired Shree Puja Travels for my wedding guests transportation in Hyderabad. Everything was well managed, and the drivers were courteous. Highly recommended!',
      name: "Pooja Sharma, Hyderabad",
      location: "Customer, rented a SUV",
      image: "assets/t2.jpeg"
    },
     {
      heading:'"Perfect for family travel!"',
      text:'We recently went on a family trip to Ooty. The Ertiga was spacious and the journey was smooth. Thank you for making our vacation stress-free.',
      name: "Ankit Patel, Ahmedabad",
      location: "Customer, rented a Traveler",
      image: "assets/t3.jpeg"
    },
    {
      heading:'"Affordable & reliable!"',
      text:'I had to travel from Mumbai to Nashik for an urgent meeting. Booked a one-way cab through Shree Puja Travels—on-time pickup and reasonable pricing. Really impressed.',
      name: "Sana Khan, Mumbai",
      location: "Customer, rented a SUV",
      image: "assets/t4.jpeg"
    },
    {
      heading: '"Best pilgrimage tour planner!"',
      text:'Our Char Dham Yatra with Shree Puja Travels was divine and well-organized. The driver was experienced and took care of all our needs throughout the trip.',
      name: "Vijay Thakur, Delhi",
      location: "Customer, rented a Sedan",
      image: "assets/t5.jpeg"
    }
  ];

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

 nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  this.resetAutoplay();
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  this.resetAutoplay();
}

goToSlide(index: number) {
  this.currentSlide = index;
  this.resetAutoplay();
}
resetAutoplay() {
  clearInterval(this.interval); // stop current interval
  this.startAutoplay();         // start new interval
}


  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  touchStartX = 0;
touchEndX = 0;

handleTouchStart(event: TouchEvent) {
  this.touchStartX = event.changedTouches[0].screenX;
}

handleTouchEnd(event: TouchEvent) {
  this.touchEndX = event.changedTouches[0].screenX;
  this.handleSwipeGesture();
}

handleSwipeGesture() {
  const deltaX = this.touchEndX - this.touchStartX;

  // Minimum swipe distance threshold
  const minSwipeDistance = 50;

  if (deltaX > minSwipeDistance) {
    // Swiped right → previous slide
    this.prevSlide();
  } else if (deltaX < -minSwipeDistance) {
    // Swiped left → next slide
    this.nextSlide();
  }
}
}
