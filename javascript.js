let turno = 0;
let count =0;
const tablero =[];

const btnPulsado =(e,pos) => {
    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'green' : 'red'
    btn.style.backgroundColor = color;
    tablero[pos] =color;

    if(haGanado()) swal.fire({
        icon: 'success',
            title: 'ah ganado '+ color,
            text: 'felicidades!',
            
    }).then((value) => {
        location.reload();
        }).catch(swal.noop);
    
}
const haGanado =()=>{
    
    //verifica el valor del vecor es igual al horizonalmente
    if(tablero[0]==tablero[1] && tablero[0]==tablero[2]&& tablero[0])
    return true;
    else if(tablero[3]==tablero[4]&& tablero[3]==tablero[5]&& tablero[3]){
    return true;
    }else if(tablero[6]==tablero[7]&& tablero[6]==tablero[8]&& tablero[6]){
      return true;
    } 
  //verifica el valor de la vector es igual al horizonalmente
    else if(tablero[0]==tablero[3]&& tablero[0]==tablero[6]&& tablero[0]){
    return true;
    }else if(tablero[1]==tablero[4]&& tablero[1]==tablero[7]&& tablero[1]){
    return true;
    }
    else if(tablero[2]==tablero[5]&&tablero[2]==tablero[8]&& tablero[2]){
        return true;
    }//verifica el valor del vector diagonal mente
    else if(tablero[0]==tablero[4]&&tablero[0]==tablero[8]&& tablero[0]){
        return true;
    }else if(tablero[2]==tablero[4]&& tablero[2]==tablero[6]&& tablero[2]){
        return true;
    }
    count++;
    if(count==9){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'todos los campos fueron llenados sin llegar a un ganador, se reiniciara el juego a continuacion!'
         })
         .then((value) => {
            location.reload();
            }).catch(swal.noop);
    }
    return false;
    
}
document.querySelectorAll('.button').forEach(
    (obj, i)=>obj.addEventListener('click', (e)=>btnPulsado(e,i)));
