<template>
<div

<!--    class="ErrorUnfilled">-->
<!--  <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>-->
<!--  <p class="orange darken-1 white&#45;&#45;text">Viga andmete sisestamisel</p>-->

  <div class="mdc-banner" role="banner">
    <div class="mdc-banner__content"
         role="alertdialog"
         aria-live="assertive">
      <div class="mdc-banner__graphic-text-wrapper">
        <div class="mdc-banner__text">
          There was a problem processing a transaction on your credit card.
        </div>
      </div>
      <div class="mdc-banner__actions">
        <button type="button" class="mdc-button mdc-banner__secondary-action">
          <div class="mdc-button__ripple"></div>
          <div class="mdc-button__label">Learn more</div>
        </button>
        <button type="button" class="mdc-button mdc-banner__primary-action">
          <div class="mdc-button__ripple"></div>
          <div class="mdc-button__label">Fix it</div>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

//tee parallaxiga

<script>
export default {
  name: "ErrorUnfilled"
}
</script>

<style scoped>

</style>