<template>   
      <div :class="'mycard ' + variation">
          <img class="card__image" :src="getImage(cardImage)" alt="Card Image">
        <div class="card__overlay">
            <div class="card__container">
                <AppCardTitle :title="title" />
                <AppCardContent :content="content"/>
            </div>
        </div>
        </div>   
</template>

<script>
import AppCardTitle from '../atoms/AppCardTitle';
import AppCardContent from '../atoms/AppCardContent';

export default {
    name: 'AppCard',
    components:{
        AppCardTitle,
        AppCardContent
    },
     methods: {
        getImage(img) {
        return require("@/assets/" + img);
        }
    },
    props:{
        title:{
            type: String,
            default: 'Title'
        },
        content:{
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        cardImage: {
            type: String,
            default: 'xyz.jpeg'
        },
        variation:{
            type: String,
            default: 'card--single'
        },    
    }
}
</script>
