<template>
<div>
  <h1>認証済みユーザーのヘッダー</h1>
  <Nuxt/>
</div>
</template>

<script>
// import { mapActions } from 'vuex'

export  default{
   middleware: 'authenticated',
}
</script>