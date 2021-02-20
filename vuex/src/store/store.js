import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 90},
            {name: "Lost World", price: 200}
          ],
    },
    getters:{
        salesBooks:(state)=>{
            let salesBooks = state.books.map((book)=>{
                return {
                    name:`** ${book.name}`,
                    price:book.price/2,
                }

            });
            return salesBooks;
        }
    },
    mutations:{
        dicrementPrice: (state)=>{
            state.books.forEach((book)=>{
                book.price -= 1;
            })

        }
    },
    actions:{
        dicrementPrice:(context)=>{
            setTimeout(()=>{
                context.commit('dicrementPrice')
            },1000)
        }

    },
})