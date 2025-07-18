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
      name: "Ramesh Iyer, Chennai",
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
    },
     {
      heading: '',
      text:'We booked a five-day outstation trip with Shree Puja Travels, and it was a fantastic experience. The driver was courteous, patient, and ensured our comfort throughout the journey. The car was spacious and well-maintained, making our trip smooth and enjoyable. Thank you for such excellent service!',
      name: "Anand & Meena Sharma",
      location: "Customer, rented a Sedan",
      image: "assets/t6.jpeg"
    },
     {
      heading: '',
      text:'Shree Puja Travels stands out as one of the finest travel services available in Hyderabad. As someone visiting from another city, I found the entire experience exceptionally comfortable and hassle-free. The level of care and attention to detail provided is truly top-class. The vehicle was impeccably clean, well-maintained, and personally managed, offering a sense of reliability and warmth. Safety is clearly a top priority, which adds to the peace of mind while traveling. Without a doubt, Shri Puja Travels is the best choice in Hyderabad, and I would confidently recommend their services to anyone seeking quality and professionalism.',
      name: "Dr. Mahima Dand",
      location: "Customer, rented a SUV",
      image: "assets/t7.jpeg"
    },
     {
      heading: '',
      text:'As a senior citizen, I appreciate punctual and reliable service, and Shree Puja Travels exceeded my expectations. Our five-day trip was stress-free, the driver assisted us at every stop, and the car was incredibly comfortable. I highly recommend them for long journeys!',
      name: "Surendra Rao",
      location: "Customer, rented a Sedan",
      image: "assets/t8.jpeg"
    },
     {
      heading: '',
      text:'I had an amazing experience with Shree Puja Travels. The car was in excellent condition, and the chauffeur was very professional.The entire process was smooth and hassle-free. Highly recommended!',
      name: "Rajesh Kumar",
      location: "Customer, rented a Sedan",
      image: "assets/t9.jpeg"
    },
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
