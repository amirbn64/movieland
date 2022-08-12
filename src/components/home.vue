<template>
  <div>
    <body>
      <div class="container">
          <section id="search_section">
              <div class="search_box">
                  <div class="search_box_leftSide">
                      <label for="movie_search">Search by release date:</label>
                     <datepicker id="movie_search" v-model="customDate"  format="yyyy-MM-dd"></datepicker>
                  </div>
                  <button id="search_btn" @click="chkdate()">Search</button>
              </div>
          </section>
          <section id="movie_items_section">
              <div class="movie_item_wrapper">
                <div v-for="item in items.results.slice(startslice,endslice)" :key="item">
                    <router-link :to="{name:'moviedetail',
                    params:{movie_id:item.id},
                    query: {movie_id:item.id}}">
                    <div class="movie_item">
                        <a>
                            <div class="movie_item_img">
                                <img :src="images.images.base_url+images.images.poster_sizes[5]+item.poster_path" width="120" height="180">
                            </div>
                        </a>
                        <a class="movie_item_content_link">
                            <div class="movie_item_content">
                                <div class="movie_item_title">{{item.title}}</div>
                                <div class="movie_item_kind">
                                    <div class="movie_item_dateRlease">{{item.release_date}}</div>
                                    <ul>
                                        <li>1</li>
                                        <li>Action</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    </router-link>
                </div>
                <div>
                <!-- {{calc.name}} -->

                </div>
              </div>
          </section>

          <!-- <section id="change_movie_items_btn_section">
              <div class="btn_page_list">
                  <div class="btn_page previous_btn">Previous Page</div>
                  <div class="btn_page next_btn">Next Page</div>
              </div>
              <div class="result_page_number">Showing results <span class="current_page">1</span> - <span class="end_page">20</span></div>
          </section> -->

           <section id="change_movie_items_btn_section">
            <div class="btn_page_list">
                <div class="btn_page previous_btn" :class="{active_color: isActive_previous_btn,deactive_color: !isActive_previous_btn}" @click="previousPage()">Previous Page</div>
                <div class="btn_page next_btn" :class="{active_color: isActive_next_btn,deactive_color: !isActive_next_btn}" @click="nextPage()">Next Page</div>
            </div>
            <div class="result_page_number">Showing results <span class="current_page">{{currentPage}}</span> - <span class="end_page">{{(Math.floor(items.results.length/12)+1)}}</span></div>
          </section>
                <!-- <b-pagination
                  v-model="currentPage"
                  :total-rows="totalPages"
                  :per-page="recordsPerPage">
                </b-pagination> -->
      </div>
    </body>
  </div>
</template>
<style>
  @import '../assets/css/main.css';

.current {
    color: teal;
}
</style>
<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker';

  export default {
    data() {
      return {
        items:[],
        images:[],
        genres: [],
        currentPage: 1,
        startslice:0,
        endslice:12,
        recordsPerPage: 12,
        totalPages:100,
        customDate: new Date()
      }
    },
    components: {
      Datepicker
    },
   mounted() {
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/discover/movie/`,
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response) => {
          this.items = response.data
          // this.items = JSON.parse(this.items);
          // console.log(this.items.results[0].id);
          
        });
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/configuration`,
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response0) => {
          this.images = response0.data
          // this.items = JSON.parse(this.items);
          // console.log(this.items.results[0].id);
        });
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/genre/movie/list`,
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response1) => {
          this.genres = response1.data
          // this.items = JSON.parse(this.items);
          console.log(this.genres);
        });
    },
    methods: {
      nextPage(){
        if(this.endslice < this.totalPages){
        this.startslice = this.startslice + this.recordsPerPage;
        this.endslice = this.endslice + this.recordsPerPage;
        this.currentPage = this.currentPage + 1;
        }
        this.totalPages = this.items.results.length
      },
      previousPage(){
        if(this.startslice > 0){
        this.startslice = this.startslice - this.recordsPerPage;
        this.endslice = this.endslice -
         this.recordsPerPage;
        this.currentPage = this.currentPage - 1
        }
              },
        chkdate(){
          var mydate = document.getElementById("movie_search").value;
          // this.items => this.items.results.release_date = mydate
          console.log(mydate)
              }
  }
  }
</script>
