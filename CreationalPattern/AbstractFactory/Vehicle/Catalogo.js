const FabricaVehiculo = require("./FabricaVehiculo");
const FabricaVehiculoElectricidad = require("./FabricaVehiculoElectricidad");
const FabricaVehiculoGasolina = require("./FabricaVehiculoGasolina");

const main = () => {

    let autos = []; // automoviles abstractos
    let scooters = [];  // sccotter abstractos
    let fabrica = new FabricaVehiculo(); // fabrica abstracta



    // fabrica electricidad CONCRETA
    fabrica = new FabricaVehiculoElectricidad();
    // crea autos electricos
    autos.push(fabrica.crearAutomovil("GTM", "black", 600, 5));
    autos.push(fabrica.crearAutomovil("AUDI", "White", 800, 2));
    autos.push(fabrica.crearAutomovil("Mercedez", "Grey", 400, 4));

    // crea scooters electricos
    scooters.push(fabrica.crearScooter("GCM", "Yellow", 60));
    scooters.push(fabrica.crearScooter("XIAOMI", "Orange", 80));
    scooters.push(fabrica.crearScooter("Rayo", "Red", 50));

    console.log('\n\n============== [impresion vehiculos Electricudad] ==============\n\n');
    autos.forEach(auto => auto.mostrarCaracteristicas());
    scooters.forEach(scoote => scoote.mostrarCaracteristicas());

    autos = [];
    scooters = [];



    // fabrica gasolina CONCRETA
    fabrica = new FabricaVehiculoGasolina();
    // crea autos gasolina
    autos.push(fabrica.crearAutomovil("Ferrari", "Red", 850, 2));
    autos.push(fabrica.crearAutomovil("Ford", "Black", 300, 4));
    autos.push(fabrica.crearAutomovil("Mercedez", "Blue", 798, 6));
    // crea scooters gasolina
    scooters.push(fabrica.crearScooter("GCM", "Yellow", 60));
    scooters.push(fabrica.crearScooter("XIAOMI", "Orange", 80));
    scooters.push(fabrica.crearScooter("Rayo", "Red", 50));

    console.log('\n\n============== [impresion vehiculos Gasolina] ==============\n\n');
    autos.forEach(auto => auto.mostrarCaracteristicas());
    scooters.forEach(scooter => scooter.mostrarCaracteristicas());


};

main();