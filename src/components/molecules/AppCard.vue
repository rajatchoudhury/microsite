<template>
    <div class="card">
        <div class="card__overlay">
            <div class="card__container">
                <AppCardTitle />
                <AppCardContent />
            </div>
        </div>
    </div>
</template>

<style>
    .card {
        background: center / cover no-repeat url("../../assets/xyz.jpeg");
    }
</style>

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
            default: 'Content to be shown here.'
        },
        size:{
            type: String,
            default: 'card__single'
        },    
    }
}
</script>
