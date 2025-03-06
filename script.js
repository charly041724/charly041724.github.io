//Alerta de bienvenida a nuestra página web
$(document).ready(function() {
   if (!localStorage.getItem('alertaMostrada')) {
       alert("¡BIENVENIDO A LA PÁGINA WEB DE ELÉCTRICA CHARLY!");
       localStorage.setItem('alertaMostrada', 'true'); 
      }
//Productos  
    const productos = [
        { 
            id: 1, 
            nombre: "Pala cuadrada",
            precio: 313.50, 
            imagen: "1.jpg"
         },
         { 
            id: 2,
             nombre: "Juego de  desarmadores", 
             precio: 165.00, 
             imagen: "2.jpg" 
        },
        { 
            id: 3, 
            nombre: "Contactos", 
            precio: 53.00, 
            imagen: "3.jpg"
         },
         {
            id:4,
            nombre:"Parrillas",
            precio:525.99,
            imagen: "4.jpg"
         },
         {
            id:5,
            nombre:"Interruptores",
            precio:86.00,
            imagen: "5.jpg"
         },
         {
            id:6,
            nombre:"Centro de carga",
            precio:95.00,
            imagen: "6.jpg"
         },
         {
            id:7,
            nombre:"Multicontactos",
            precio:48.00,
            imagen: "7.jpg"
         },
         {
            id:8,
            nombre:"Sensores movimiento",
            precio:355.00,
            imagen: "8.jpg"
         },
         {
            id:9,
            nombre:"Base medidor",
            precio:209.00,
            imagen: "9.jpg"
         },
         {
            id:10,
            nombre:"Lámpara led",
            precio:75.00,
            imagen: "10.jpg"
         },
         {
            id:11,
            nombre:"Luminarios decorativos",
            precio:365.00,
            imagen: "11.jpg"
         },
         {
            id:12,
            nombre:"Cuerdas de Polipropileno de 30 mts",
            precio:129.00,
            imagen: "12.jpg"
         },
         {
            id:13,
            nombre:"Bolsa de taquetes de platico",
            precio:55.00,
            imagen: "13.jpg"
         },
         {
            id:14,
            nombre:"Candado de alta segurida de 60 mm.",
            precio:329.00,
            imagen: "14.jpg"
         },
         {
            id:15,
            nombre:"Cerradura de Pomo tipo esfera",
            precio:235.00,
            imagen: "15.jpg"
         },
         {
            id:16,
            nombre:"Regadera con extencion tipo telefono",
            precio:399.00,
            imagen: "16.jpg"
         },
         {
            id:17,
            nombre:"Bomba Periferica de 1/2 caballo",
            precio:925.00,
            imagen: "17.jpg"
         },
         {
            id:18,
            nombre:"Bomba Centrifuga de 1/2 caballo",
            precio:2395.00,
            imagen: "18.jpg"
         },
         {
            id:19,
            nombre:"Juego de 13 brocas",
            precio:425.00,
            imagen: "19.jpg"
         },
         {
            id:20,
            nombre:"Cinta de Aislar negra",
            precio:20.00,
            imagen: "20.jpg"
         }
       
    
    ];
//Funciones del carrito
    const carrito = [];
    function actualizarCarrito(){
        let total = 0;
        $('.carrito-lista').empty();

        carrito.forEach(item=>{
            const producto = productos.find(p => p.id === item.id);
            total += producto.precio * item.cantidad;
            $('.carrito-lista').append(`
                <li>
                    <span>${producto.nombre} x ${item.cantidad}</span>
                    <span>$${(producto.precio * item.cantidad).toFixed(2)}</span>
                    <button class="eliminar" data-id="${producto.id}">Eliminar</button>
                </li>
            `);
        });
$('#total').text(total.toFixed(2));
    }
    function agregarAlCarrito(id){
        const productoEnCarrito = carrito.find(item => item.id === id);

        if(productoEnCarrito){
            productoEnCarrito.cantidad++;
        }else{
            carrito.push({id, cantidad: 1});
        
        }
        actualizarCarrito();
    }
function eliminarDelCarrito(id){
    const index = carrito.findIndex(item => item.id === id);
    if(index !== -1){
        carrito.splice(index, 1);
    }
    actualizarCarrito();

    }
    productos.forEach(producto => {
        $('.productos').append(`
            <div class="producto">
            <img src= "${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="agregar" data-id="${producto.id}">Agregar al carrito</button>
                </div>
        `);
    });
    $('.productos').on('click', '.agregar', function(){
        const id = $(this).data('id');
        agregarAlCarrito(id);
    });
     $('.carrito').on('click', '.eliminar', function(){
        const id = $(this).data('id');
         eliminarDelCarrito(id);
    });
    });


    //Mapa ubicación Eléctrica Charly
    $(document).ready(function() {
      const locations = [
          {
              name: 'UBICACIÓN',
              latlng: [18.44803, -96.36053],
              image: 'mapa.jpg',
              description: 'Av. Aquiles Serdán 206, Centro, 95100 Tierra Blanca, Ver.'
          }
      ];

      function initMap() {
          const map = L.map('map').setView([18.44803, -96.36053], 15); 
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
          }).addTo(map);
          
          const markers = locations.map(location => {
              const marker = L.marker(location.latlng).addTo(map);
              marker.on('click', () => {
                  showMarkerInfo(location);
              });s
              return marker;
          });

          function showMarkerInfo(location) {
              const markerInfo = $('#marker-info');
              markerInfo.html(`
                  <h3>${location.name}</h3>
                  <img src="${location.image}" alt="${location.name}" class="img-fluid">
                  <p>${location.description}</p>
              `);
          }
      }

      initMap(); 
  });
// Contactanos
      function validarFormulario() {
         var nombre = document.getElementById("nombre").value;
         var email = document.getElementById("email").value;
         var mensaje = document.getElementById("mensaje").value;
         var aceptarTerminos = document.getElementById("aceptar_terminos").checked;
     
       if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!aceptarTerminos) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }
         alert("Formulario enviado correctamente. ¡Gracias por contactarnos nos pondremos en contacto con usted lo mas pronto posible!");
         return true;
     }
     
