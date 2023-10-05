import Brands from './Brands';
import CarSlider from './CarSlider';

export default function Cars() {
  return (
    <section className="section flex items-center my-16 md:my-0" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
}
