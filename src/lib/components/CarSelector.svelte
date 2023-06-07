<script>
  import { carNum } from "$lib/stores.js";
  import SetButton from "$lib/components/SetButton.svelte";
  import { ChevronUp, ChevronDown } from "carbon-icons-svelte";

  let leftDigit = 0;
  let rightDigit = 0;

  let selector;
  let set = false;

  // if the set button is active, disable associated buttons
  $: if (set) {
    const btns = selector.querySelectorAll('.select');
    btns.forEach(btn => {
      btn.disabled = true;
    });
    $carNum = {
      num: parseInt('' + leftDigit + rightDigit),
      selected: true
    };
    // code to connect to a vehicle can be placed here
  } else if (selector) {
    const btns = selector.querySelectorAll('.select');
    btns.forEach(btn => {
      btn.disabled = false;
    });
    $carNum.selected = false;
  }

  function checkBounds(newDigit) {
    if ((newDigit >= 0) && (newDigit <= 9)) return newDigit;
    else if (newDigit < 0) return 9;
    else if (newDigit > 9) return 0;
  }

  function increment(side) {
    if (side === 'left') 
      leftDigit = checkBounds(leftDigit + 1);
    else if (side === 'right') 
      rightDigit = checkBounds(rightDigit + 1);
  }

  function decrement(side) {
    if (side === 'left') 
      leftDigit = checkBounds(leftDigit - 1);
    else if (side === 'right') 
      rightDigit = checkBounds(rightDigit - 1);
  } 
</script>

<div id="selector" bind:this={selector}>
  <div id="numSelect">
    <div id="left">
      <button class="select" on:click="{() => increment('left')}">
        <ChevronUp size="40" fill="#42be65"/>
      </button>
      <span class="digit">{leftDigit}</span>
      <button class="select" on:click="{() => decrement('left')}">
        <ChevronDown size="40" fill="#42be65"/>
      </button>
    </div>
    <div id="right">
      <button class="select" on:click="{() => increment('right')}">
        <ChevronUp size="40" fill="#42be65"/>
      </button>
      <span class="digit">{rightDigit}</span>
      <button class="select" on:click="{() => decrement('right')}">
        <ChevronDown size="40" fill="#42be65"/>
      </button>
    </div>
  </div>

  <SetButton text="SELECT CAR" bind:set={set} disabled="{false}"/>
</div>

<style>
  #selector {
    position: relative;
    left: -7px;
    width: 100%;
    display: flex;
    justify-content: left;
  }

  #numSelect {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #left, #right {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }

  .select {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
    background: none;
    border: none;
  }

  .select:hover {
    cursor: pointer;
  }

  .digit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16pt;
  }
</style>