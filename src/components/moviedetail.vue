<template>
    <div>
        <div class="container">
            <section id="detail_page_top_section">
                <div class="top_detail">
                    <button id="back_btn">
                        <a href="" class="back_btn_link">
                            &#8592;
                            Back
                        </a>
                    </button>
                    <div class="top_detail_content">
                        <div class="top_detail_title_movie">{{moviedetail.original_title}}</div>
                        <p>{{moviedetail.tagline}}</p>
                    </div>
                </div>
            </section>
            <section id="content_info_movie_section">
                <div class="img_content_info_movie">
                    <img :src="images.images.base_url+images.images.poster_sizes[5]+moviedetail.poster_path" alt="single_movieImg">
                </div>
                <ul>
                    <li><span><strong>Budget</strong></span><span>${{moviedetail.budget}}</span></li>
                    <li><span><strong>Revenue</strong></span><span>${{moviedetail.revenue}}</span></li>
                    <li><span><strong>Release Date</strong></span><span>{{moviedetail.release_date}}</span></li>
                    <li><span><strong>Runtime</strong></span><span>{{moviedetail.runtime}}</span></li>
                    <li><span><strong>Score</strong></span><span>avg: {{moviedetail.vote_average}} in {{moviedetail.vote_count}} vote</span></li>
                    <li><span><strong>Genres</strong></span><div v-for="item in moviedetail.genres" :key="item">{{item.name}}</div></li>
                    <li><span><strong>IMDB Link</strong></span><span><a href="#" class="color_med_blue text_decoration_underline">https://www.imdb.com/title/{{moviedetail.imdb_id}}</a></span></li>
                    <li><span><strong>Homepage Link</strong></span><span><a href="#" class="color_med_blue text_decoration_underline">{{moviedetail.homepage}}</a></span></li>
                </ul>
            </section>
            <section id="move_story_explain_section">
                <div>
                    <p>
                    {{moviedetail.overview}}
                     </p>
                </div>
                <div>
                    <strong class="credit">Credit:</strong>
                    <span v-for="credit in moviecredit.cast " :key="credit">
                        {{credit.character}},
                    </span>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        moviedetail:[],
        moviecredit:[],
        images:[]
      }
    },
    mounted() {
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/`+this.$route.query.movie_id,
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response) => {
          this.moviedetail = response.data
          // this.moviedetails = JSON.parse(this.moviedetails);
        //   console.log(this.moviedetail);
        });
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/`+this.$route.query.movie_id+'/credits',
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response0) => {
          this.moviecredit = response0.data
          // this.moviedetails = JSON.parse(this.moviedetails);
        //   console.log(this.moviedetail);
        });
                axios({
          method: "get",
          url: `https://api.themoviedb.org/3/configuration`,
          params: {
            api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
          },
        }).then((response00) => {
          this.images = response00.data
          // this.items = JSON.parse(this.items);
          // console.log(this.items.results[0].id);
        });
    }
  }
</script>