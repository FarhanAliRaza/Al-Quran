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
  <div class="background min-h-screen ">
    <div class="max-w-5xl  pt-8 sm:pt-52  mx-2 sm:mx-auto  ">
      <div class="px-4  sm:px-6 lg:px-8">
        <div class="flex justify-center sm:items-center">
          <AudioPlayer src={$surahs[0].src} />
        </div>
        <!-- <div class="mt-8">
                <div class="text-gray-50 font-bold underline text-center text-3xl">
                    All Surahs
                </div>
            </div> -->
        <div class="mt-8 divide-y flex flex-col">
          <div
            class="-my-2 -mx-4 overflow-x-auto overflow-y-auto h-80 sm:-mx-6 lg:-mx-8"
          >
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <table class="min-w-full">
                <tbody class="divide-y ">
                  {#each $surahs as s}
                    <tr class=" ">
                      <div
                        class="  {s.id == $surah.id
                          ? 'bg-blue-600'
                          : ' '} rounded-full flex justify-around"
                      >
                        <td
                          class="whitespace-nowrap  py-4 pl-4 pr-3 text-gray-50 text-base font-medium sm:pl-6 md:pl-0"
                          >{s.id}</td
                        >
                        <td
                          class="whitespace-nowrap py-4 px-3 text-base  text-gray-50 font-medium "
                          >{s.name}</td
                        >
                        <td
                          class="whitespace-nowrap py-4 px-3 text-base font-medium text-gray-50"
                        >
                          {#if s.id == $surah.id}
                            {#if $playing == false}
                              <PlayButton {s} />
                            {:else}
                              <PauseButton {s} />
                            {/if}
                          {:else}
                            <PlayButton {s} />
                          {/if}
                        </td>
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
  <div class="text-white absolute bottom-5 text-center right-10">
    Developed with ❤️ by <a target="_blank" href="https://twitter.com/FarhanAliRaza4">@Farhan Ali Raza</a>
  </div>
</div>

<style>
  .background {
    background-image: url("/bg.jpg");

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
