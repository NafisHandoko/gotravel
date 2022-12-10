import Header from '/assets/1.header.jpg'
import Paris from '/assets/2.paris.jpg'
import Tokyo from '/assets/3.tokyo.jpg'
import Bali from '/assets/4.bali.jpg'
import TourGuidance from '/assets/5.tour_guidance.jpg'
import TravelConsultant from '/assets/6.travel_consultant.jpg'
import TravelPlanning from '/assets/7.travel_planning.jpg'
import Ship from '/assets/8.ship.svg'
import Car from '/assets/9.car.svg'
import Money from '/assets/10.money.svg'
import Contact from '/assets/11.contact.jpg'

function App() {

  return (
    <div className="App">
      <header className='bg-center bg-cover text-white' style={{ backgroundImage: `url(${Header})` }}>
        <div className='bg-black/50 min-h-screen'>
          <nav className='container mx-auto flex flex-col md:flex-row items-center md:justify-between w-full px-28 py-10'>
            <h3 className='font-bold text-3xl'>Gotravel</h3>
            <ul className='flex flex-row gap-x-7 items-center'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Why Us?</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className='min-h-[75vh] container mx-auto w-full flex flex-col items-center justify-center gap-y-5 text-center px-10 md:px-0'>
            <h1 className='font-bold text-3xl'>Better ride, better place with Gotravel</h1>
            <p>We can bring you to travel through many exotic destination across the world</p>
            <button className='bg-primary py-3 px-5'>Get started</button>
          </div>
        </div>
      </header>
      <section className='container mx-auto flex flex-col items-center mb-32'>
        <div className='flex flex-col md:flex-row items-center bg-white shadow-xl p-5 -translate-y-20 gap-7'>
          <h2 className='font-bold text-xl text-center'>Our popular destination</h2>
          <div className='flex flex-col md:flex-row items-center text-white'>
            <div className='bg-center bg-cover' style={{ backgroundImage: `url(${Paris})` }}>
              <div className='bg-black/50 w-32 aspect-square flex flex-col items-center justify-center'>
                Paris
              </div>
            </div>
            <div className='bg-center bg-cover' style={{ backgroundImage: `url(${Tokyo})` }}>
              <div className='bg-black/50 w-32 aspect-square flex flex-col items-center justify-center'>
                Tokyo
              </div>
            </div>
            <div className='bg-center bg-cover' style={{ backgroundImage: `url(${Bali})` }}>
              <div className='bg-black/50 w-32 aspect-square flex flex-col items-center justify-center'>
                Bali
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto flex flex-col items-center mb-32'>
        <h2 className='font-bold text-3xl mb-7'>Our Services</h2>
        <div className='flex flex-col md:flex-row text-white gap-12'>
          <div className='bg-center bg-cover' style={{ backgroundImage: `url(${TourGuidance})` }}>
            <div className='bg-black/50 w-56 flex flex-col items-center justify-center p-5'>
              <h3 className='font-bold text-lg mb-7'>Tour Guidance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet in lacus, pellentesque. Sodales sagittis pulvinar nunc.</p>
            </div>
          </div>
          <div className='bg-center bg-cover' style={{ backgroundImage: `url(${TravelConsultant})` }}>
            <div className='bg-black/50 w-56 flex flex-col items-center justify-center p-5'>
              <h3 className='font-bold text-lg mb-7'>Travel Consultant</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet in lacus, pellentesque. Sodales sagittis pulvinar nunc.</p>
            </div>
          </div>
          <div className='bg-center bg-cover' style={{ backgroundImage: `url(${TravelPlanning})` }}>
            <div className='bg-black/50 w-56 flex flex-col items-center justify-center p-5'>
              <h3 className='font-bold text-lg mb-7'>Travel Planning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet in lacus, pellentesque. Sodales sagittis pulvinar nunc.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto flex flex-col items-center mb-32'>
        <h2 className='font-bold text-3xl mb-7'>Why Choose Us?</h2>
        <div className='flex flex-col items-stretch w-full px-10 md:px-32 gap-7'>
          <div className='flex flex-col-reverse md:flex-row items-center gap-7'>
            <div className='flex flex-col w-full md:w-1/2'>
              <h3 className='font-bold text-2xl mb-5'>Various transportation you can choose</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pulvinar tortor, dictum in pretium, eget semper quis. Feugiat.</p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={Ship} alt="" />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row-reverse items-center gap-7'>
            <div className='flex flex-col w-full md:w-1/2'>
              <h3 className='font-bold text-2xl mb-5'>Various transportation you can choose</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pulvinar tortor, dictum in pretium, eget semper quis. Feugiat.</p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={Car} alt="" />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row items-center gap-7'>
            <div className='flex flex-col w-full md:w-1/2'>
              <h3 className='font-bold text-2xl mb-5'>Various transportation you can choose</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pulvinar tortor, dictum in pretium, eget semper quis. Feugiat.</p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={Money} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-center bg-cover mb-32' style={{ backgroundImage: `url(${Contact})` }}>
        <div className='bg-black/50 text-white'>
          <div className='container mx-auto flex flex-col items-center min-h-[50vh] justify-center'>
            <h2 className='font-bold text-3xl mb-5 text-center'>Ready for an amazing trip?</h2>
            <button className='bg-primary py-3 px-5'>Contact Us Now!</button>
          </div>
        </div>
      </section>
      <section className='container mx-auto flex flex-col md:flex-row items-center gap-7 px-10 md:px-32 mb-32'>
        <div className='w-full md:w-1/2 flex flex-col text-center md:text-start'>
          <h3 className='font-bold text-2xl mb-5'>Various transportation you can choose</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pulvinar tortor, dictum in pretium, eget semper quis. Feugiat.</p>
        </div>
        <div className='w-full md:w-1/2 flex flex-row items-stretch justify-center'>
          <input type="text" className='bg-gray-200 text-gray-500 px-5 md:pr-8 w-3/4 box-border' placeholder='Enter your email' />
          <button className='bg-primary py-3 px-5 text-white'>Susbscribe</button>
        </div>
      </section>
      <footer className='bg-primary py-5 text-white md:px-28'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <h3 className='font-bold text-3xl md:mr-auto'>Gotravel</h3>
          <p className='text-center'>Copyright 2022 Gotravel</p>
          <div className='flex flex-row items-center gap-x-4 md:ml-auto text-lg'>
            <a href=""><i class="bi bi-linkedin"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
