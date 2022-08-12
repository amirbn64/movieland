const axios = require("axios").default;

const app = new Vue({

    el: '#main',
   
    data: {

        result: '',
        responseAvailable: false,
        apiKey: 'f62f750b70a8ef11dad44670cfb6aa57'

    },

    methods: {

        fetchAPIData( ) {           
                this.responseAvailable = false;

            fetch("https://api.themoviedb.org/3/discover/movie", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "https://api.themoviedb.org/3/discover/movie",
                    "x-rapidapi-key": this.apiKey
                }
            })
            .then(response => { 
                if(response.ok){
                    return response.json()    
                } else{
                    alert("Server returned " + response.status + " : " + response.statusText);
                }                
            })
            .then(response => {
                this.result = response.body; 
                this.responseAvailable = true;
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

})