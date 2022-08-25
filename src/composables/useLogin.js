import { ref } from 'vue'

//firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'


const errorS = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    errorS.value = null
    isPending.value = true
    
    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        if(!res) {
            throw new Error('Could not Login')
        }
        errorS.value = null
        isPending.value = false
    }
    catch (err) {
        console.log(err.message)
        errorS.value = err.message
        isPending.value = false
    }
}

const useLogin = () => {
    return {errorS, isPending, login}
}

export default useLogin