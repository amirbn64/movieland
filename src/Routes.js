
import home from './components/home.vue';
import moviedetail from './components/moviedetail.vue';

export const Routes = [
    {
    path: '/',
    component: home
  },
  
  {
    path: '/moviedetail',
     name:'moviedetail',
    component: moviedetail,
    // props:true
  }
  
];

