<template>
  <div class="row q-mb-sm">
    <q-input 
      outlined
      clearable 
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      label="Task name" 
      class="col" />
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

