<template>
    <section>
        <h1 class="title">My Profile</h1>
        <b-field label="Name">
            <b-input v-model="person.name"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="person.email" disabled></b-input>
        </b-field>
        <b-field label="Mobile">
            <b-input v-model="person.mobile" ></b-input>
        </b-field>
        <a class="button is-success" @click="updatePerson()">
            <span>Update</span>
        </a>
    </section>
</template>

<script>
    import  coreApiGraphql from '../services/coreApiGraphql';
    const apicore = new coreApiGraphql();

    export default {      
        created(){
                // eslint-disable-next-line 
             
                this.person=JSON.parse(localStorage.getItem('objsession')).person;
        },
        data() {
            return {
                person: {}
            }
        }, 
        methods: {
            updatePerson() {
                apicore.updatePerson(this.person).then(() => {                    
                    this.$toast.open({
                        message: 'Profile updated!',
                        type: 'is-success'
                    });
                }).catch(// eslint-disable-next-line 
                    err => {
                        // TODO extract into function
                        this.$toast.open({
                            duration: 3000,
                            message: "Something's not good, try again",
                            position: 'is-top',
                            type: 'is-danger'
                        });
                    });
                }
        }
    }
</script>
