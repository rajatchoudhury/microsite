<template>
    
      <div :class="'mycard ' + variation">
          <img class="card__image" src="../../assets/xyz.jpeg" alt="Card Image">
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
    props:{
        title:{
            type: String,
            default: 'Title'
        },
        content:{
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget velit.'
        },
        variation:{
            type: String,
            default: 'card--single'
        },    
    }
}
</script>
