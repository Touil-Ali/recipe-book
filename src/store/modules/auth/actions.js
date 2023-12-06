export default {
    async login(context,payload) {
              const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTrekWAwuUxTOQxJsLUjz_4ncONs83w7A', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }
            )});
            const responseData = await response.json();
            responsefunction(responseData,context,response);
    },

    async signUp(context, payload) {
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTrekWAwuUxTOQxJsLUjz_4ncONs83w7A',{
        method: 'POST',
              body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
              })
         })
            const responseData = await response.json();
            responsefunction(responseData,context,response);
       }

}
const isAuthenticated = (context) => {
    const token = context.state.token;
    return token != null && token != '';
}

const responsefunction = (responseData,context,response) => {
    if(!response.ok){
        console.log(responseData);
        throw new Error(responseData.message || 'Failed to authenticate. Check your login data.');
    }
    console.log(responseData);
    context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
    });
}