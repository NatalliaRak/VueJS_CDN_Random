const app = Vue.createApp({
    data() {
        return{
          image1: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_890.jpg',
          image2: 'https://images.dog.ceo/breeds/hound-basset/n02088238_11849.jpg',
          image3: 'https://images.dog.ceo/breeds/hound-english/n02089973_3147.jpg'           
        }             
      },
      
    

    methods: {
            async getBreed() {
                const url = 'https://dog.ceo/api/breeds/image/random/3'
              await axios.get(url)
                .then(response => {
                   const data = response.data
                    const links = data.message
                    this.image1 = links[0]
                    this.image2 = links[1]
                    this.image3 = links[2]
                    console.log(this.image2)
                })                 
              }
 

        
    },
})


app.mount('#app')