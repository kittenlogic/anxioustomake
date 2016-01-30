// Fall v2.1 By MaxxBlade - http://www.maxxblade.co.uk/fall

var fallObjects=new Array();function newObject(url,height,width,link){fallObjects[fallObjects.length]=new Array(url,height,width,link);}

///////////// EDIT THIS SECTION //////////////
var numObjs=40, waft=50, fallSpeed=15, wind=0;
newObject("img/product-1.png",50,50,"https://www.zazzle.com/create_your_own_igloo_beverage_cooler-256011118137502279");
newObject("img/product-3.png",40,40,"https://www.zazzle.com/add_your_own_design_custom_ping_pong_paddle-256009750132338542");
newObject("img/product-4.png",30,30,"https://www.zazzle.com/create_your_own_gym_duffle_bag-256560018442292998");
newObject("img/product-6.png",50,50,"https://www.zazzle.com/infinity_loop_and_galaxy_space_hipster_custom_pick-256176386043620719");
newObject("img/product-7.png",70,70,"https://www.zazzle.com/funny_hamburger_in_a_sesame_seed_bun_round_pouf-256518126121615495");
newObject("img/product-9.png",30,30,"https://www.zazzle.com/custom_cotton_throw_pillow_20_x_20-189029820324949893");
newObject("img/product-10.png",69,68,"https://www.zazzle.com/custom_cotton_throw_pillow_20_x_20-189029820324949893");
newObject("img/product-11.png",50,50,"https://www.zazzle.com/custom_wide_white_apron-154424114236666453");
newObject("img/product-12.png",70,70,"https://www.zazzle.com/your_name_here_custom_electric_purple_visor-256413184362740057");
newObject("img/product-15.png",20,20,"https://www.zazzle.com/custom_medium_laptop_sleeve-124436955357585199");
newObject("img/product-16.png",50,50,"https://www.zazzle.com/diy_make_your_own_personalized_deck_of_cards-256876484594730871");
newObject("img/product-17.png",70,70,"https://www.zazzle.com/palms_and_pier_gel_mouse_pad-159966577598446984");
newObject("img/product-20.png",20,20,"https://www.zazzle.com/customize_product_license_plate-256137113945863087");
newObject("img/product-22.png",70,70,"https://www.zazzle.com/customized_car_flag-256462984912037420");
newObject("img/product-23.png",40,40,"https://www.zazzle.com/make_your_own_tie-151940286389103867");
newObject("img/product-24.png",30,30,"https://www.zazzle.com/the_vdown_custom_grosgrain_non_slip_headband_athletic_headbands-256089435615884397");
newObject("img/product-25.png",20,20,"https://www.zazzle.com/make_your_own_custom_square_compact_mirrors-256573673597899807");
newObject("img/product-26.png",40,40,"https://www.zazzle.com/bbq_chicken_legs_novelty_gift_pillows-189703437507995851");
newObject("img/product-27.png",70,70,"https://www.zazzle.com/custom_flameless_candle-256286024511540665");
newObject("img/product-28.png",40,40,"https://www.zazzle.com/my_custom_large_3_inch_round_button_pin-145126647248680888");
newObject("img/product-31.png",40,40,"https://www.zazzle.com/spicy_gold_brown_ombre_bathroom_scale-256963892744614965");
newObject("img/product-32.png",40,40,"http://anxioustomake.ga/mugruggenerator.html");
newObject("img/product-33.png",40,40,"https://www.zazzle.com/custom_rectangular_key_ring_double_sided_double_sided_rectangular_acrylic_keychain-256782683764385530");
newObject("img/product-34.png",40,40,"https://www.zazzle.com/create_your_own_belt-256932893774713504");
newObject("img/product-37.png",40,40,"https://www.zazzle.com/custom_wedding_stainless_steel_15oz_travel_mug-168127469971615870");
newObject("img/product-38.png",40,40,"https://www.zazzle.com/make_your_own_tie-151940286389103867");
newObject("img/product-39.png",40,40,"https://www.zazzle.com/custom_usb_2_0_flash_8gb_silver_clip_black_swivel_usb_2_0_flash_drive-256522284128638969");
newObject("img/product-40.png",40,40,"https://www.zazzle.com/custom_school_binder-127744978518836080");
newObject("img/product-41.png",40,40,"https://www.zazzle.com/custom_photo_trucker_hat-148025812234661262");
newObject("img/product-42.png",40,40,"https://www.zazzle.com/custom_photo_trucker_hat-148025812234661262");
newObject("img/product-43.png",40,40,"https://www.zazzle.com/red_white_blue_trucker_hat-148496481588308644");
newObject("img/product-44.png",40,40,"https://www.zazzle.com/uncommon_iphone_6_6s_clearly_deflector_case_uncommon_clearly_deflector_iphone_6_case-256492692438876316");
newObject("img/product-47.png",40,40,"https://www.zazzle.com/diy_woven_visor_blank_white_custom_f02_headsweats_visor-256742549926708583");
newObject("img/product-49.png",40,40,"https://www.zazzle.com/create_your_own_fannypack_nylon_fanny_pack-256832574681026807");
newObject("img/product-50.png",40,40,"https://www.zazzle.com/create_your_own_fannypack_nylon_fanny_pack-256832574681026807");
newObject("img/product-51.png",40,40,"https://www.zazzle.com/custom_glossy_ipad_case-256615660836936706");
newObject("img/product-55.png",40,40,"https://www.zazzle.com/custom_incipio_feather_shine_iphone_6_6s_case_incipio_feather_shine_iphone_6_case-256174322797709811");
newObject("img/product-56.png",40,40,"https://www.zazzle.com/black_marble_finish_snow_globe_snow_globes-256755314931663995");
newObject("img/product-59.png",40,40,"https://www.zazzle.com/custom_family_photo_monogram_usb_flash_drive_wood_usb_2_0_flash_drive-256762042969910954");



/////////////////////////////////////////////

function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;}
function winOfy(){winOffset=(moz)?window.pageYOffset:document.body.scrollTop;}
function fallObject(num,vari,nu){
  objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
  if(nu==1){document.write('<a href="' +fallObjects[vari][3]+ '" target="_blank"><img id="fO'+i+'" style="position:absolute;top:-1000" src="'+fallObjects[vari][0]+'"></a>'); }
}
function fall(){
  for(i=0;i<numObjs;i++){
    var fallingObject=document.getElementById('fO'+i);
    if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){fallObject(i,objects[i][6],0);}
    objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
    with(fallingObject.style){ top=objects[i][1]+winOffset+"px";left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+"px";}
  }
  setTimeout("fall()",31);
}
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;winSize();
for (i=0;i<numObjs;i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1);}
window.onscroll=winOfy;window.onresize=winSize;

// fall();

 $('.clickme').on('click', fall);


