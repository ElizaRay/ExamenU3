// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlhtSloIB-D-PHqvxpEFP0Sq6EKXdKnmw",
    authDomain: "examen-unidad-3-bb320.firebaseapp.com",
    projectId: "examen-unidad-3-bb320",
    storageBucket: "examen-unidad-3-bb320.appspot.com",
    messagingSenderId: "266162323866",
    appId: "1:266162323866:web:a6e3ec0a3709fcb8913a23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Declaro Variable para mi base de datos
  var basedatos = firebase.database();

  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');

  // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';

  // Consumir datos de Realtime
  
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/

  function readval(){
    var coleccion = basedatos.ref().child('usuarios/username');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion usuarios/username: ' + snapshot.val();

    });
  }
  
  function readget(){
      basedatos.ref('usuarios').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerHTML = 'Resultado de coleccion usuarios/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }

  function readval1(){
    var coleccion = basedatos.ref().child('clientes');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      /*app.innerText = 'Resultado de coleccion usuarios/username: ' + snapshot.val();*/


    });
  }
  
  function readget1(){
      basedatos.ref('clientes').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerHTML = 'Resultado de coleccion usuarios/username: ' + snapshot.val();
        
          }
      else{
        console.log("No data available");
        /*app.innerText = 'No data available';*/
      } 
    }).catch(function(error) {
      console.error(error);
    });
  }


  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('usuarios').set({
      username: "Elizabeth",
      email: "elizarayonramirez@gmail.com",
    });
    console.log("Agregar datos");
  }

  //Agregar colección a base de datos
  function writenewcollection(userId,name,email) {
    var nombre = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    basedatos.ref('clientes').set({
      username: nombre,
      email: mail,
    });
    console.log("Agregar datos");
  }