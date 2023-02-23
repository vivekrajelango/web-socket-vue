<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
// const storeUser = useUserStore();

const inputVal= ref('');
const errMessage= ref('');

const validateUser=()=>{
    // const value = inputVal.value;
    // const validateUser = storeUser.userItems.find((item)=>{
    //     return item.name === value;
    // })
    if(validateUser){
        console.log('redirect')
        // router.push("/chat")
        router.push({
          name: 'chat',
          query: {name:inputVal.value }
        })
    } else {
        errMessage.value = 'Please enter valid user'
    }
//    console.log('storeUser', validateUser)
}

const textHandler=(e)=>{
    const val = e.target.value;
    if(val!== ''){
        errMessage.value = ''
    } else {
        errMessage.value = 'Please enter name'
    }
}
</script>

<template>
<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Join the Board!</h5>
            <form @submit.prevent="validateUser">
              <div class="form-floating">
                <input type="text" v-model="inputVal" @input="textHandler" class="form-control" id="floatingInput" placeholder="Username" required>
                <label for="floatingInput">Username</label>
              </div>
              <small class="text-danger">{{ errMessage }}</small>
              <div class="d-grid text-center mt-3">
                <!-- <RouterLink to="/board"> -->
                    <button class="btn btn-primary px-5" type="submit">Join</button>
                <!-- </RouterLink> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>