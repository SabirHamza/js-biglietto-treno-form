const generate = document.getElementById("generate");

generate.addEventListener(
    "click",
    function () {
        
        const username = document.getElementById("user_name").value;
        
        const km = document.getElementById("km").value;
        
        const age = document.getElementById("age").value;
        
        const price = 0.21 * km; 
        
        document.getElementById('outname').innerHTML = username;

        document.getElementById('code').innerHTML = Math.floor(Math.random() * 10000) + 1;
        
        document.getElementById('seat').innerHTML = Math.floor(Math.random() * 100) + 1;
        
        if (age < 18){
            let discountedrprice = (price * 80) / 100
            
            document.getElementById('price').innerHTML = discountedrprice.toFixed(2);

            document.getElementById('type').innerHTML = 'Minorenne';
        }else if (age > 65){
            let discountedrprice = (price * 60) / 100
            
            document.getElementById('price').innerHTML = discountedrprice.toFixed(2);

            document.getElementById('type').innerHTML = 'Over 65';
        }else{
            let discountedrprice = price
            
            document.getElementById('price').innerHTML = discountedrprice.toFixed(2);

            document.getElementById('type').innerHTML = 'Regular';
        }
    }
);
        
        
