window.onload = function () {
   const masyvas = [5,12,3,6,8,14,15,5,6,10] ;
   console.log(masyvas);
   console.log(intervaloSumaVienetu(masyvas));
}
 function intervaloSumaVienetu(masyvas) {
     let suma = 0;
     for (let i = 0; i <masyvas.length; i++) 
     if (intervalasDvylikaKeturiolika(i) === x) {
        suma += 1;
         
     }
     return suma ;
        
         
     }
     function intervalasDvylikaKeturiolika(x) {
        return 10 < x < 14 ; 
     }  