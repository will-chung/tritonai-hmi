<script>
  import { carNum } from '$lib/stores.js';
  import DateTime from '$lib/components/DateTime.svelte';
  import Circle from 'carbon-icons-svelte/lib/CircleSolid.svelte';

  export let height;

  $: fill = $carNum.selected ? 'green' : 'red';
</script>

<div id="infobar" style:height="{height}px">
  <div id="carDisplay">
    <span id="carNum">Car {$carNum.num}</span>
    <Circle fill="{fill}"/>
  </div>
  <DateTime/>
</div>

<style>
  #infobar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 3px solid black;
  }

  #carDisplay {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  #carNum {
    position: relative;
    font-size: 14pt;
    left: 15px;
  }
</style>