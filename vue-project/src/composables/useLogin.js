import { ref } from 'vue'

//firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'


const errorSignIn = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    errorSignIn.value = null
    isPending.value = true
    
    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        if(!res) {
            throw new Error('Could not Login')
        }
        errorSignIn.value = null
        isPending.value = false
    }
    catch (err) {
        console.log(err.message)
        errorSignIn.value = err.message
        isPending.value = false
    }
}

const useLogin = () => {
    return {errorSignIn, isPending, login}
}

export default useLogin