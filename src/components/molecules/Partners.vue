 <template>
    <div class="row">
        <div class="col-12 col-md-12 col-lg-4  side-banner " >
            
            <img src="../../assets/Zensar-Eon-01.jpg" class="img-responsive d-none d-lg-block " alt="">
            
            <div class="content">
                <h1>{{title}}</h1>
                <p>{{content}}</p>
            </div>            
        </div>          

        <div class="col-12 col-md-12 col-lg-8">

            <div class="row ">
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
                <div class="col-6 col-sm-6 col-md-4 partner-logo ">
                    <img src="../../assets/cisco.png" alt="">
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
 export default {
  name: "Partners",
  data: {
      partners: [ {
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },
      {
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },
      {
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },
      {
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },
      {
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },{
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },{
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },{
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      },{
          name: 'Cisco',
        logo: '../../assets/cisco.png'
      }]
  },
  props: { 
     title:{
            type: String,
            default: 'Partnerships'
        },
        content:{
            type: String,
            default: 'Content to be shown here.'
        },
        backImage: {
            type: String,
            default: '../../assets/Zensar-Eon-01.jpg'
        }
    }
}
</script>
