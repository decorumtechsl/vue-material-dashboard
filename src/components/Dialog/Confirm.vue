<template>

    <md-dialog-confirm />
</template>

<script>
export default {
  name: 'DialogConfirm',
  props: () => ({
    active: false,
    value: null
  }),
}
</script>
