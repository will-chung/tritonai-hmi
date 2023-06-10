<script>
  import { statusFlags } from "$lib/stores.js";

  export let color;
  export let label; 
  export let left;
  
  let lit = false;

  $: boxShadow = lit ? `0 0 10px 5px ${color}` : 'none';

  $: if (lit && color === '#000000') {
    boxShadow = '0 0 10px 5px white';
  }

  function toggle() {
    lit = !lit;
    if (lit) {
      $statusFlags.push((label.toLowerCase()));
    } else {
      const index = $statusFlags.indexOf(label.toLowerCase());
      $statusFlags.splice(index, 1);
    }
    // code to communicate selected flag to connected vehicle can be placed here
    // an array of all currently active flags can be accessed with `$statusFlags`
  }
</script>

<div id="flag">
  {#if left}
    <span style:text-align="right">{label}</span>
    <div id="btnOutline">
      <button style="background-color: {color};" 
              style:box-shadow="{boxShadow}"
              on:click={toggle}>
      </button>
    </div>
  {:else}
    <div id="btnOutline">
      <button style="background-color: {color};" 
              style:box-shadow="{boxShadow}"
              on:click={toggle}>
      </button>
    </div>
    <span>{label}</span>
  {/if}
</div>

<style>
  #flag {
    height: 90px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #btnOutline {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-color: #262626;
    box-shadow: 0 0 0 2px black;
  }

  button {
    width: 70px;
    height: 70px;
    border: none;
    border-radius: 2px;
  }

  button:hover {
    cursor: pointer;
  }

  span {
    width: 50px;
  }
</style>