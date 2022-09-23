class App {
  constructor() {
    this.carsContainer = document.getElementById("cars-container");
    this.unavailableCar = document.getElementById("unavailable-car")
    this.editButton = document.getElementById("fc-btn-edit")
    this.searchButton = document.getElementById("fc-btn")
    this.form = document.forms["fc-form"];
  }

  async init() {
    await this.load();
    this.form.onsubmit = this.run;
  }

  run = (e) => {
    e.preventDefault();

    this.searchButton.setAttribute('hidden', 'true');
    this.editButton.removeAttribute('hidden')
    this.editButton.onclick = () => {
      this.unavailableCar.setAttribute('hidden', 'true');
    }

    const carCapacity = this.form["jumlah_penumpang"].value;
    const availableTime = this.form["tanggal"].value;
    const pickUpTime = this.form["waktu_jemput"].value;
    const driverType = this.form["tipe_driver"].value;
    const newDate = new Date(`${availableTime}T${pickUpTime}Z`);

    !availableTime || !pickUpTime || !driverType
      ? alert("Isi semua form terlebih dahulu")
      : this.clear();

    const filteredCar = [];
    Car.list.forEach((car) => {
      if (
        car.availableAt > newDate &&
        car.capacity >= carCapacity &&
        car.available
      ) {
        filteredCar.push(car);
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carsContainer.append(node);
      }
    });

    if (!filteredCar.length) {
      this.unavailableCar.removeAttribute('hidden')
      this.unavailableCar.innerHTML = `
      <div class="alert alert-primary text-center" role="alert">
        Mobil yang anda cari tidak tersedia
      </div>
      `;
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carsContainer.firstElementChild;
    while (child) {
      child.remove();
      child = this.carsContainer.firstElementChild;
    }
  };
}
