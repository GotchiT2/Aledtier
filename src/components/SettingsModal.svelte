<script lang="ts">
  import { TIER_LETTERS } from "../domain/Tier";
  import { tierLabels } from "../lib/stores";
</script>

<ol class="">
  {#each TIER_LETTERS as t, i}
    <li><input placeholder="Entrez un titre de tier : {$tierLabels[i]}" type="text" name="" id="" bind:value={$tierLabels[i]}><div class='tier-{t}'>{t}</div></li>
  {/each}
</ol>
<style>
ol {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

li input {
  width: 50%;
  
}

li div {
  width : 3rem;
  height : 3rem;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 3rem;
}

.tier-SSS {
        background-color: #FFFFFF;
        color: #ECAA00;
    }
    .tier-S {
        background-color: #1DAEFF;
        color: #FFFFFF;
    }
    .tier-A {
        background-color: #3EEA83;
        color: #00491D;
    }
    .tier-B {
        background-color: #B1FF33;
        color: #254900;
    }
    .tier-C {
        background-color: #FBFF2E;
        color: #706400;
    }
    .tier-D {
        background-color: #FF9A3D;
        color: #634210;
    }
    .tier-E {
        background-color: #FF364E;
        color: #5E0000;
    }
    .tier-F {
        background-color: #86480E;
        color: #000000;
    }
    .tier-G {
        background-color: #2C2C2C;
        color: #D62424;
    }
</style>