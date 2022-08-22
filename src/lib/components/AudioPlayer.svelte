
<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { surah, player, playing } from "$lib/stores.js";


  export let src;
  $:{
    if($surah){
        console.log($surah);
        src = $surah.src;
    }
  }


</script>

<div>
<div  class="text-gray-50 text-center p-5 text-2xl">
    {$surah.name}
</div>
  <audio style="display: block;"  bind:this={$player} controls  on:play={()=>
    playing.set(true)} on:pause={()=>
playing.set(false)} 
{src}  >
  </audio>
</div>
