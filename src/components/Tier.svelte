<script lang="ts">
    import type { TierLetter } from "../domain/Tier";
    export let letter: TierLetter;

</script>

<div class={`tier-${letter}`}>{ letter }</div>

<style>
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

    div {
        height: 2.5rem;
        width: 12rem;
        line-height: 2.5rem;
        text-align: center;
        font-weight: bold;
    }
</style>
