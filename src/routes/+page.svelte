<script>
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import PauseButton from "$lib/components/PauseButton.svelte";
  import PlayButton from "$lib/components/PlayButton.svelte";
  import { surah, surahs, player, playing } from "$lib/stores.js";

  $: {
    console.log($playing, "is playing");
  }
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="background min-h-screen relative ">
    <div class="bg-indigo-700 absolute h-full w-full opacity-0">

    </div>
    <div class="max-w-5xl  pt-8 sm:pt-52  mx-2 sm:mx-auto  ">
      <div class="px-4  sm:px-6 lg:px-8">
        <div class="flex justify-center sm:items-center">
          <AudioPlayer src={$surah.src} />
        </div>
        <!-- <div class="mt-8">
                <div class="text-gray-50 font-bold underline text-center text-3xl">
                    All Surahs
                </div>
            </div> -->
        <div class="mt-8 divide-y flex flex-col">
          <div
            class="-my-2 -mx-4 overflow-x-auto overflow-y-auto h-96 sm:-mx-6 lg:-mx-8"
          >
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <table class="min-w-full pt-2 relative  ">
                
                <tbody class="divide-y  ">
                  {#each $surahs as s}
                    <tr class=" ">
                      <div
                        class="  {s.id == $surah.id
                          ? 'bg-blue-600'
                          : ''} rounded-full hover:cursor-pointer grid grid-cols-2 justify-items-center content-center p-5 "
                        on:click={() => {
                          surah.set(s);
                          $player.play();
                        }}
                      >
                        <td
                          class="whitespace-nowrap  col-span-1    text-white text-base font-medium "
                          >{s.id}</td
                        >
                        <td
                          class="whitespace-nowrap col-span-1  text-base  text-white font-medium "
                          >{s.name}</td
                        >
                        <td
                          class="whitespace-nowrap col-span-1  text-base font-medium text-gray-50"
                        />
                      </div>
                    </tr>
                  {/each}

                  <!-- More people... -->
                </tbody>
             
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-white absolute bottom-5 w-full  text-center ">
    Developed with ❤️ by <a
      target="_blank"
      href="https://twitter.com/FarhanAliRaza4">@Farhan Ali Raza</a
    >
  </div>
</div>

<style>
  .background {
    background-image: url("/bg.jpg");

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(216, 216, 216);

    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d9dadb;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e5e7eb;
  }
</style>
