<script>
  import SetButton from "./SetButton.svelte";
  import { ChevronUp, ChevronDown } from 'carbon-icons-svelte';
  
  export let text;

  let leftDigit = 0;
  let middleDigit = 0;
  let rightDigit = 0;

  let selector;
  let set = false;

  $: if (set) {
    const btns = selector.querySelectorAll('.select');
    btns.forEach(btn => {
      btn.disabled = true;
    });
  } else if (selector) {
    const btns = selector.querySelectorAll('.select');
    btns.forEach(btn => {
      btn.disabled = false;
    });
  }

  function checkBounds(newDigit, side) {
    if (side === 'left') {
      if (newDigit === 2) {
        if ((middleDigit === 0) && (rightDigit === 0)) return newDigit;
        else return 1; 
      } else {
        if ((newDigit === 0) || (newDigit === 1)) return newDigit;
        else if (newDigit < 0) return 0;
        else if (newDigit > 2) return 2;
      }
    } else {
      if (leftDigit !== 2) {
        if ((newDigit >= 0) && (newDigit <= 9)) return newDigit;
        else if (newDigit < 0) return 9;
        else if (newDigit > 9) return 0;
      } 
      else return 0;
    }
  }  

  function increment(side) {
    if (side === 'left') 
      leftDigit = checkBounds(leftDigit + 1, 'left');
    else if (side === 'mid') 
      middleDigit = checkBounds(middleDigit + 1);
    else if (side === 'right') 
      rightDigit = checkBounds(rightDigit + 1);
  }

  function decrement(side) {
    if (side === 'left') 
      leftDigit = checkBounds(leftDigit - 1, 'left');
    else if (side === 'mid') 
      middleDigit = checkBounds(middleDigit - 1);
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

    <div id="middle">
      <button class="select" on:click="{() => increment('mid')}">
        <ChevronUp size="40" fill="#42be65"/>
      </button>
      <span class="digit">{middleDigit}</span>
      <button class="select" on:click="{() => decrement('mid')}">
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

  <SetButton text="{text}" bind:set={set} disabled="{false}"/>
</div>

<style>
  #selector {
    border-top: 3px solid black;
    border-right: 3px solid black;
    height: 95%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #numSelect {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #left, #middle, #right {
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