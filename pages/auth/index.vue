<template>
<div class="flex flex-col h-screen">
  <div class="bg-gray-100 flex-auto">
    <div class="flex justify-center mt-20">
      <div class="w-9/12 border bg-white">
        <div class="my-16 text-center">
          <h2 class="text-4xl font-bold">ログイン</h2>
          <form class="mt-12" @submit.prevent="signUp">
            <div class="mb-3">
              <input 
                v-model="email"
                placeholder="you@gmail.com" 
                class="text-xl w-7/12 p-3 border rounded"
              />
            </div>
            <div class="mb-5">
                <input
                    v-model="password"
                    type="password"
                    placeholder="パスワード"
                    class="text-xl w-7/12 p-3 border rounded"
                />
            </div>
            <button
                type="submit"
                class="mb-3 text-xl w-4/12 bg-blue-800 text-white py-2 rounded hover:opacity-75"
            >
                {{ isLogin ? "Login" : "Singup" }}
            </button>
          </form>
          <div class="mb-5">
          <label class="inline-flex items-center">
             <a class="switch-link" type="submit" @click="isLogin = !isLogin">Switch to {{ isLogin? "Signup" : "Login" }}</a>
          </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 export default {
  data() {
   return {
     isLogin: true,
     email: "",
     password: "",
   }
  },
  methods: {
    signUp(){
      const signUpData = {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }
      this.$store.dispatch("auth/authenticateUser",signUpData)
    }
  }
 };
</script>

<style scoped>
 .switch-link {
  cursor: pointer;
  color: blue;
 }
</style>
